var loggedin = false;
var user;
var token;
var guilds;
var socket = io(location.origin);

$(document).ready(() => {
	token = Cookies.get("token");
	if (token) {
		var d = {
			token: JSON.parse(atob(token))
		};
		token = d.token;
		$("#load").show();
		gotLogin(d);
	}

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$("#back-to-top").fadeIn();
		} else {
			$("#back-to-top").fadeOut();
		}
	});

	$(".dashboard #wrapper .nav#sidebarTabs a").on("click", e => {
		$(e.currentTarget)
			.siblings()
			.removeClass("active");
	});

	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

	$("#back-to-top").click(function() {
		$("#back-to-top").tooltip("hide");
		$("body,html").animate(
			{
				scrollTop: 0
			},
			800
		);
		return false;
	});
});

var win;
var wininvite;

function doLogin(e) {
	if (
		$(e)
			.siblings()
			.eq(0)
			.hasClass("active")
	) {
		return;
	} else {
		$(e)
			.siblings()
			.eq(0)
			.attr("style", "display: none !important");
	}

	$("#load").show();
	win = window.open(
		"https://discordapp.com/api/oauth2/authorize?client_id=569201129691283497&redirect_uri=http://flam3rboy.ddns.net/api/authorize&response_type=code&scope=identify guilds guilds.join&state=" +
			socket.id,
		"windowOpenTab",
		"height=900,width=600"
	);

	var popupTick = setInterval(function() {
		if (win.closed) {
			clearInterval(popupTick);
			gotLogin({ error: "closed" });
		}
	}, 500);
}

function invite(id) {
	wininvite = window.open(
		"https://discordapp.com/oauth2/authorize?client_id=569201129691283497&permissions=8&redirect_uri=http://flam3rboy.ddns.net/api/bot&scope=bot&guild_id=" +
			id +
			"&response_type=code&state=" +
			socket.id,
		"windowOpenTab",
		"height=900,width=600"
	);
}

socket.on("data", data => {
	console.log(data);
	gotLogin(data);
});

function gotLogin(data) {
	if (data.error) {
		console.log(data.error + data.error_description);
		try {
			win.close();
		} catch (e) {}
		$("#load").hide();
	} else {
		Cookies.set("token", btoa(JSON.stringify(data.token)));
		token = data.token;
		$.get({
			url: "https://discordapp.com/api/users/@me",
			beforeSend: function(request) {
				request.setRequestHeader(
					"Authorization",
					data.token.token_type + " " + data.token.access_token
				);
			},
			success: function(u) {
				user = u;
				$("#accountDropdownButton").html(u.username);
				$("#accountDropdown").show();
				$("#accountDropdown").removeClass("show");
				$("#accountDropdown").addClass("active");
				finishUserLoad();

				window.scrollTo(0, 0);
				$("#load p").html(
					"Hello " + u.username + "#" + u.discriminator
				);
			}
		});

		$.get({
			url: "https://discordapp.com/api/users/@me/guilds",
			beforeSend: function(request) {
				request.setRequestHeader(
					"Authorization",
					data.token.token_type + " " + data.token.access_token
				);
			},
			success: function(g) {
				guilds = g;

				finishUserLoad();
			}
		});
	}
}

var calls = 0;

function finishUserLoad() {
	calls++;
	if (calls >= 2) {
		try {
			win.close();
		} catch (e) {}

		var text = "";
		console.log(guilds);

		guilds
			.filter(x => x.owner || (x.permissions & 0x8) != 0)
			.forEach(guild => {
				if (guild.icon) {
					text +=
						"<img id='" +
						guild.id +
						"' onclick='selectGuild(this)' data-placement='bottom' data-toggle='tooltip' title='" +
						guild.name +
						"' class='guild pointer' src='https://cdn.discordapp.com/icons/" +
						guild.id +
						"/" +
						guild.icon +
						"'><br>";
				} else {
					var initals = "";
					guild.name
						.split(" ")
						.forEach(x => (initals += x.slice(0, 1)));
					text +=
						"<span id='" +
						guild.id +
						"' onclick='selectGuild(this)' data-placement='bottom' data-toggle='tooltip' title='" +
						guild.name +
						"' class='guild pointer'>" +
						initals +
						"</span>";
				}
			});

		$("#guildList").html(text);
		$('[data-toggle="tooltip"]').tooltip();

		$("#load").hide();
		$(".dashboard").show();
		$("main").hide();
		$("footer").hide();
	}
}

var guild;
var testGuildInvite = 0;

function selectGuild(g) {
	g = g.id;
	$.get({
		url: location.origin + "/api/guild/" + g,
		success: function(body) {
			body = JSON.parse(body);

			if (Object.keys(body).length <= 0) {
				if (testGuildInvite <= 0) {
					testGuildInvite++;
					invite(g);
					var popupTick = setInterval(
						function(h) {
							if (wininvite.closed) {
								clearInterval(popupTick);
								selectGuild({ id: h });
							}
						},
						500,
						g
					);
				} else {
					$(".dashboard").prepend(
						'<div class="alert alert-danger alert-dismissible fade show">Couldn\'t add bot to server<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
					);
					testGuildInvite = 0;
				}
			} else {
				testGuildInvite = 0;
				$("#guildList").hide();
				$("#wrapper").css("display", "flex");
				guild = body;

				body.textchannels = body.channels
					.filter(x => x.type != "voice")
					.sort((a, b) => {
						if (a.position > b.position) {
							return 1;
						} else if (a.position < b.position) {
							return -1;
						} else {
							return 0;
						}
					});

				var newchannelorder = [];

				var categorys = body.textchannels.filter(
					x => x.type == "category"
				);

				categorys.forEach(c => {
					newchannelorder.push(c);
					body.textchannels
						.filter(t => t.parentID == c.id)
						.forEach(t => newchannelorder.push(t));
				});

				console.log(body);

				var textchannels = "";
				var lastcategory = "";

				newchannelorder.forEach(x => {
					if (lastcategory != x.name && x.type == "category") {
						textchannels +=
							"</optgroup><optgroup label='" + x.name + "'>";
					} else {
						textchannels +=
							"<option value='" +
							x.id +
							"' id='" +
							x.id +
							"'>" +
							x.name +
							"</option>";
					}
				});

				textchannels += "</optgroup>";
				$(".textchannels").html(textchannels);
				var $newElement = replaceTag($(".textchannels"), "select");
				$(".textchannels").replaceWith($newElement);
				$(".textchannels").selectpicker();
			}
		}
	});
}

function logout() {
	Cookies.remove("token");
	location.reload();
}

function guildList() {
	$(".dashboard").show();
	$("main").hide();
	$("footer").hide();
	$("#guildList").show();
	$("#wrapper").hide();
}

function home() {
	$(".dashboard").hide();
	$("main").show();
	$("footer").show();
}

function replaceTag($element, newTagName) {
	// Identify opening and closing tag
	var oldTagName = $element[0].nodeName,
		elementString = $element[0].outerHTML,
		openingRegex = new RegExp("^(<" + oldTagName + " )", "i"),
		openingTag = elementString.match(openingRegex),
		closingRegex = new RegExp("(</" + oldTagName + ">)$", "i"),
		closingTag = elementString.match(closingRegex);

	if (openingTag && closingTag && newTagName) {
		// Remove opening tag
		elementString = elementString.slice(openingTag[0].length);
		// Remove closing tag
		elementString = elementString.slice(0, -closingTag[0].length);
		// Add new tags
		elementString =
			"<" + newTagName + " " + elementString + "</" + newTagName + ">";
	}

	return $(elementString);
}

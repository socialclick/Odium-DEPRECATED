function say() {
	var channel = $("#sayChannels")
		.find("select")
		.val();

	var roles = [];

	$("#sayRoleList")
		.children()
		.each((i, x) => {
			roles.push(
				$(x)
					.find("select")
					.val()
			);
		});

	console.log(roles, channel);
	$.get({
		url:
			"/api/guild/" +
			guild.id +
			"/say/" +
			channel +
			"/" +
			JSON.stringify(roles) +
			"/" +
			Base64.encode($("#sayText").val()),
		success: function(body) {
			console.log(body);
			if (body == "true") {
				$("#statusSend").bs_success("Successfully send message!");
			} else {
				$("#statusSend").bs_alert(
					"There was an error sending you message!"
				);
			}
		},
		error: function() {
			$("#statusSend").bs_alert(
				"There was an error sending you message!"
			);
		}
	});
}

function removeSayRole() {
	$("#sayRoleList")
		.children()
		.last()
		.remove();
}

function addSayRole() {
	$("#sayRoleList").append(
		"<select class='roles col-5 m-2 selectpicker'>" +
			generateRoles(guild.roles) +
			"</select>"
	);
	$("#sayRoleList .selectpicker")
		.last()
		.selectpicker({
			liveSearch: true,
			style: "btn-outline-primary"
		});
}

function generateRoles(roles) {
	var text = "";
	roles = roles
		.sort((a, b) => {
			if (a.position > b.position) {
				return -1;
			} else if (a.position < b.position) {
				return 1;
			} else {
				return 0;
			}
		})
		.forEach(x => {
			text +=
				"<option id='" +
				x.id +
				"' value='" +
				x.id +
				"'>" +
				x.name +
				"</option>";
		});
	return text;
}

function say() {
	var channel = $("#sayChannels").val();

	var roles = [];

	$("#sayRoleList")
		.children()
		.each((i, x) => {
			roles.push($(x).val());
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
		"<select class='roles m-2'>" + generateRoles(guild.roles) + "</select>"
	);
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

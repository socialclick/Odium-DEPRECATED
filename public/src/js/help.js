function getStats() {
	$.get({
		url: "/api/stats/",
		success: function(body) {
			displayStats(JSON.parse(body));
		}
	});
}

function displayStats(stats) {
	var text = "";

	text += "<h5>Servers: " + stats.servers + "</h5>";
	text += "<h5>Channels: " + stats.channels + "</h5>";
	text += "<h5>Roles: " + stats.roles + "</h5>";
	text += "<h5>Uptime: " + msToTime(stats.uptime) + "</h5>";
	text += "<h5>Ping: " + stats.ping + "ms</h5>";

	$("#helpStats").html(text);
}

function msToTime(milli) {
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	var hours = Math.floor((milli / (60 * 1000 * 60)) % 60);
	var days = Math.floor((milli / (60 * 1000 * 60 * 24)) % 24);

	return days + "d " + hours + ":" + minutes + ":" + seconds;
}

var loggedin = false;
var socket = io(location.origin);

$(document).ready(() => {
	if (loggedin) {
		$("#accountDropdown").show();
		$("#accountDropdownButton").addClass("dropdown-toggle");
	}
});

function doLogin() {
	var w = window.open(
		"https://discordapp.com/api/oauth2/authorize?client_id=569201129691283497&redirect_uri=http://flam3rboy.ddns.net/api/authorize&response_type=code&scope=identify guilds&state=" +
			socket.id,
		"windowOpenTab",
		"height=900,width=600"
	);
}

socket.on("data", data => {
	console.log(data);
});

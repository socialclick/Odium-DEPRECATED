import openSocket from "socket.io-client";
import request from "request";
import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

const socket = openSocket("http://flam3rboy.ddns.net/");

socket.on("connect", function() {
	console.log(socket.id);
	global.id = socket.id;
});

socket.on("data", function(data) {
	console.log(data);
	if (data.error) {
		alert(error.description);
	} else {
		var t = request.get("https://discordapp.com/api/v6/users/@me", {
			headers: {
				Authorization: "Authorization " + data.token.access_token
			}
		});
		console.log(t);
	}
});

socket.on("disconnect", function() {});

function init() {}

export { init };

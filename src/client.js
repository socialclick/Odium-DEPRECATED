import openSocket from "socket.io-client";
const socket = openSocket("http://flam3rboy.ddns.net/");

socket.on("connect", function() {
	console.log(socket);
});

socket.on("hi", function(data) {
	console.log(data);
});

socket.on("disconnect", function() {});

function init() {}

export { init };

const express = require("express");
const request = require("request");
const app = express();
var port = 1008;
const server = app.listen(port, () => {
	console.log("Listening on port: " + port);
});
global.io = require("socket.io")(server);

app.get("/api/authorize", (req, res) => {
	console.log(req.query.code);
	res.send("<script>window.closes()</script>");
});

io.on("connection", function(socket) {
	console.log("an user connected", socket);
	socket.emit("hi", "test");
});

app.use("/", (req, res) => {
	request("http://localhost:3000/" + req.originalUrl).pipe(res);
});

module.exports.init = d => {};

const express = require("express");
const request = require("request");
const app = express();
var port = 2008;
const server = app.listen(port, () => {
	console.log("Listening on port: " + port);
});
global.io = require("socket.io")(server);

app.get("/authorize", (req, res) => {
	console.log(req.query.code);
	request.post(
		"https://discordapp.com/api/v6/oauth2/token",
		{
			form: {
				client_id: "569201129691283497",
				client_secret: "***REMOVED***",
				grant_type: "authorization_code",
				code: req.query.code,
				scope: "identify guilds",
				redirect_uri: "http://flam3rboy.ddns.net/api/authorize"
			}
		},
		function(error, response, body) {
			body = JSON.parse(body);
			console.log("error:", error); // Print the error if one occurred
			console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
			console.log("body:", body); // Print the HTML for the Google homepage.
			if (body.error) {
				io.to(req.query.state).emit("data", {
					code: req.query.code,
					error: body.error,
					error_description: body.error_description
				});
			} else {
				io.to(req.query.state).emit("data", {
					code: req.query.code,
					token: body
				});
			}
		}
	);
	res.send("<script>window.close()</script>");
});

io.on("connection", function(socket) {
	console.log("an user connected", socket.id);
});

app.use("/", express.static("public"));

module.exports.init = d => {};

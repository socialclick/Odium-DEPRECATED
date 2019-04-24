const express = require("express");
const request = require("request");
const JSON = require("circular-json");
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
			try {
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
			} catch (e) {}
		}
	);
	res.send("");
});

app.get("/bot", (req, res) => {
	res.send("<script>window.close()</script>");
});

io.on("connection", function(socket) {
	console.log("an user connected", socket.id);
});

app.use("/guild/:id", (req, res) => {
	var json = {};
	var g = client.guilds.get(req.params.id);
	if (g) {
		g.fetchMembers();

		json.channels = g._sortedChannels().array();
		json.roles = g.roles.array();
		json.members = g.members.array();
	}
	res.send(JSON.stringify(json));
});

module.exports.init = d => {};

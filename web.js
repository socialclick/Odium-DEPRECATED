var app;
var port = 1008;

module.exports.init = d => {
	var express = d.express;
	var http = d.http;
	var request = d.request;
	var io = new d.socket({
		path: "//socket.io",
		serveClient: false,
		pingInterval: 10000,
		pingTimeout: 5000,
		cookie: false
	});

	app = express();

	app.get("/api/authorize", (req, res) => {
		console.log(req.query.code);
		res.send("<script>window.close()</script>");
	});

	io.on("connection", function(socket) {
		console.log("an user connected");
	});

	app.use("/", (req, res) => {
		request("http://localhost:3000/" + req.originalUrl).pipe(res);
	});

	app.listen(port, () => {
		console.log(`Example app listening on port ${port}!`);
	});
};

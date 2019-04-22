var app;

module.exports.init = d => {
	var express = d.express;
	var http = d.http;
	var request = d.request;
	app = express();

	app.use("/", (req, res) => {
		request("http://localhost:3000/" + req.originalUrl).pipe(res);
	});

	app.get("/api/", (req, res) => {});

	app.listen(1008, "0.0.0.0");
};

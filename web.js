var app;

module.exports.init = express => {
	app = express();

	app.use("/", express.static("static"));

	app.listen(1008, "0.0.0.0");
};

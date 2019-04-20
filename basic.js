module.exports.init = () => {
	fs.readdir(__dirname + "/commands/", {}, (err, file) => {
		if (err) console.error(err);

		var jsfile = file.filter(f => f.split(".").pop() === "js");

		jsfile.forEach((f, i) => {
			let props = require(__dirname + "/commands/" + f);
			console.log(f + " loaded!");
			client.commands.set(props.help.name, props);
		});
	});
};

global.parameter = function(name, optional) {
	this.name = name;
	this.optional = optional;
};

global.command = function(name, parameters, permission, callback) {
	this.name = name;
	this.parameters = parameters;
	this.permission = permission;
	this.function = callback;
};

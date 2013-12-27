var reddit = require('rereddit'),
	prompt = require('prompt');

var schema = {
	properties: {
		name: {
			required: true
		},
		password: {
			hidden: true,
			required: true
		}
	}
};

prompt.start();

prompt.get(schema, function (err, result) {
	reddit.login(result.name, result.password).end(function(err,user) {
		if (err != null)
			console.log(err);
		else {
			reddit.me().as(user).end(function(err, details) {
				// Now we have user details
				if (err != null)
					console.log(err);
				else console.log(details);
			});
		}
	});
});
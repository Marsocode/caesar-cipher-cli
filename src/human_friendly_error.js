// jshint esversion:6
class HumanFriendlyError extends Error {
	constructor(message, code) {
		super(message);
		this.statusCode = code;
	}
}

module.exports = HumanFriendlyError;
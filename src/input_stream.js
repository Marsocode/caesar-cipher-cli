// jshint esversion:6
const fs = require("fs");
const HumanFriendlyError = require("./human_friendly_error");

exports.input_stream = (input, action) => {
    if (typeof input === "undefined") {
        console.log("Enter text to " + action + ": ");
        return process.stdin;
    } else {
        try {
            fs.accessSync(input, fs.R_OK);
            return fs.createReadStream(input);
        } catch(error) {
            throw new HumanFriendlyError(error.message, 2);
        }

    }
};
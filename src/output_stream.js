// jshint esversion:6
const fs = require("fs");
const HumanFriendlyError = require("./human_friendly_error");

exports.output_stream = output => {
    if (typeof output === "undefined") {
        return process.stdout;
    } else {
        if (output) {
            try {
                fs.accessSync(output, fs.W_OK);
                return fs.createWriteStream(output, {flags : 'a'});
            } catch(error) {
                throw new HumanFriendlyError(error.message, 2);
            }
        }

    }
};
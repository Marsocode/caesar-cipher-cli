// jshint esversion:6
const fs = require("fs");

exports.output_stream = output => {
    if (typeof output === "undefined") {
        return process.stdout;
    } else {
        if (output) {
            try {
                return fs.createWriteStream(output, {flags : 'a'});
            } catch(error) {
                console.log(error);
            }
        }

    }
};
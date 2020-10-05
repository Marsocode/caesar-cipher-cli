// jshint esversion:6
const fs = require("fs");
// const CustomError = require('./custom_error');

exports.output_stream = output => {
    if (typeof output === "undefined") {
        return process.stdout;
    } else {
        if (output) {
            try {
                return fs.createWriteStream(output, {flags : 'a'});
            } catch(e) {
                console.log(e);
            }
        }

    }
};
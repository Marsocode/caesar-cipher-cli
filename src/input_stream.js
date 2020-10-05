// jshint esversion:6
const fs = require("fs");

exports.input_stream = (filePath, action) => {
    if (typeof filePath === "undefined") {
        console.log("Enter text to " + action + ": ");
        return process.stdin;
    } else {
        try {
            fs.accessSync(filePath, fs.R_OK);
            return fs.createReadStream(filePath);
        } catch(error) {
            throw new Error(error, 2);
        }

    }
};
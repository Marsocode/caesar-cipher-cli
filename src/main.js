// -s, --shift: a shift
// -i, --input: an input file
// -o, --output: an output file
// -a, --action: an action encode/decode
// jshint esversion:6
const fs = require("fs");
var parseArgs = require('minimist');
var argv = require('minimist')(process.argv.slice(2));
const through2 = require('through2');
const { pipeline } = require('stream');
const { check_args } = require("./check_args");
const { input_stream } = require("./input_stream");
const { output_stream} = require("./output_stream");
const { encode } = require("./caesar_cipher");
const { decode } = require("./caesar_cipher");
const { exit } = require('./custom_exit');

// console.log(argv);
// console.log(shift, action, input, output);

try {
    // check arguments
    var shift = argv["s"] || argv["shift"];
    var action = argv["a"] || argv["action"];
    var input = argv["i"] || argv["input"];
    var output = argv["o"] || argv["output"];

    // take last shift or action or input or output, if typed many times
    if (Array.isArray(shift)) shift = shift[shift.length - 1];
    if (Array.isArray(action)) action = action[action.length - 1];
    if (Array.isArray(input)) input = input[input.length - 1];
    if (Array.isArray(output)) output = output[output.length - 1];

        
    check_args(shift, action);
    console.log(shift, action, input, output);

    pipeline(
        // fs.createReadStream(input, function(err, content) {
        //     console.log(content);
        // }),

        // (err) => {
        //     (err) ? console.log("Pipeline failed.", err) : console.log('Pipeline succeeded.')
        // }

        input_stream(input, action),
        (action === "encode") ? through2(encode(shift)): through2(decode(shift)),
        output_stream(output),
        complete => {
			output_stream(output).write('\n');
			console.log(action + " completed");
	    }
    );

} catch(error) {
    exit(error);
    process.exit(error.statusCode);
}



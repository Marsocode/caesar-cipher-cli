// jshint esversion:6
const HumanFriendlyError = require("./human_friendly_error");

exports.check_args  = (shift, action) => {
    if (typeof shift === "undefined") {
        throw new HumanFriendlyError("Error: shift undefined", 1);
    } else if (isNaN(parseInt(shift))) {
        throw new HumanFriendlyError("Error: shift is not a number", 1);
    }

    if (typeof action === "undefined") {
        throw new HumanFriendlyError("Error: action undefined", 1);
    } else if (action !== "encode" && action !== "decode") {
        throw new HumanFriendlyError("Error: wrong action", 1);
    }
};


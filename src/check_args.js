// jshint esversion:6
exports.check_args  = (shift, action) => {
    if (typeof shift === "undefined") {
        throw new Error("Error: shift undefined", 1);
    } else if (isNaN(parseInt(shift))) {
        throw new Error("Error: shift is not a number", 1);
    }

    if (typeof action === "undefined") {
        throw new Error("Error: action undefined", 1);
    } else if (action !== "encode" && action !== "decode") {
        throw new Error("Error: wrong action", 1);
    }
};


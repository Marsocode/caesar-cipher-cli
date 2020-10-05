// jshint esversion:6
exports.encode = (shift) => {
    return function (chunk, enc, callback) {
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] >= 97 && chunk[i] <= 122) {
                chunk[i] += shift;
                if(chunk[i] > 122) chunk[i] -= 26;
                if (chunk[i] < 97) chunk[i] += 26;
                    
            } else if (chunk[i] >= 65 && chunk[i] <= 90) {
                chunk[i] += shift;
                if (chunk[i] > 90) chunk[i] -= 26;
                if (chunk[i] < 65) chunk[i] += 26;
            }
		}
        this.push(chunk);
		callback();
    };
};


exports.decode = (shift) => {
    return function (chunk, enc, callback) {
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] >= 97 && chunk[i] <= 122) {
                chunk[i] -= shift;
                if(chunk[i] > 122) chunk[i] -= 26;
                if (chunk[i] < 97) chunk[i] += 26;
                    
            } else if (chunk[i] >= 65 && chunk[i] <= 90) {
                chunk[i] -= shift;
                if (chunk[i] > 90) chunk[i] -= 26;
                if (chunk[i] < 65) chunk[i] += 26;
            }
		}
        this.push(chunk);
		callback();
    };
}
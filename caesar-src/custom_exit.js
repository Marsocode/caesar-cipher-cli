exports.exit = (error) => {
	process.on('exit', function (){
		process.stderr.write(error.message + "\nstatus code: " + error.statusCode);
	});
}
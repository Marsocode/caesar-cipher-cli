# Caesar cipher CLI tool

This application will encode and decode a text by Caesar cipher.
----------

To start using:

1. Download source code (Code -> Download ZIP) OR clone repo: git clone https://github.com/Marsocode/caesar-cipher-cli.git
2. Change directory to downloaded source code folder (using command promt)
3. Run command "npm install"
4. Run "node caesar-src" with options (options described below)

CLI tool accept 4 options:

1. -s, --shift: a shift (required)
2. -i, --input: an input file
3. -o, --output: an output file
4. -a, --action: an action encode/decode (required)

If **input and output files don't exist** - you can write text in command line and **result** will immediately appear on the command promt.

If **input file exists, but output file doesn't** - **result** will immediately appear on the command promt.

If **input file doesn't exist, but output file exists** - you can write text in command promt and **result** will be writing in output file.

For example:

`$ node caesar-src -a encode -s 7 -i "./input.txt" -o "./encoded.txt"`

`$ node caesar-src --action encode --shift 7 --input "./input.txt" --output "./encoded.txt"`

`$ node caesar-src -a decode -s 2 -i "./encoded.txt" -o "./decoded.txt"`

`$ node caesar-src --action decode --shift 2 --input "./encoded.txt" --output "./decoded.txt"`

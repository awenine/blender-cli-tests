//* Code taken from stack overlow answer here: https://stackoverflow.com/a/55025022
const execSync = require("child_process").execSync;

const date = Date.now();

//? Code for altering python script file before passing to Blender
const fs = require("fs");

// get argument passed in from command line
let fileName = process.argv[2];

let data = fs.readFileSync(fileName, "utf8");

// split lines
let lines = data.split("\n");

// new var line
const newVariables = `r,g,b = ${process.argv[3]},${process.argv[4]},${process.argv[5]}`;

// replaces variable line
lines.splice(2, 1, newVariables);

fs.writeFileSync(fileName, lines.join("\n"), "utf8");

//? run script based on dynamic data passed in to inject date into file name
execSync(
	`blender -b blendProjects/basic-shape-scene.blend -P scripts/changeColour.py -o //../renders/${"wombat"}-${date}-X -f 1`,
	{ stdio: [0, 1, 2] }
);

#!/usr/bin/env node

var git = require("../lib/main.js");
var program = require("commander");

console.log("w0w")

program
  .arguments('[--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p] [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]][--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing][--] [<pathspec>…]')
  .parse(process.argv);

console.log(program.args);

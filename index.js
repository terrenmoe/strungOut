#!/usr/bin/node
'use strict';
process.on('unhandledRejection', (err) => { throw err; });

const [/* basename*/, /* scriptname*/, ...pparams] = process.argv;
const { strungOut, codepoints, codepointMap } = require('./src/strungOut.js');

// process.stdout.write
console.log(strungOut(...pparams));
process.stdout.write(strungOut([...codepoints].slice(0x41, 0x5b).join(' ')));
process.stdout.write(strungOut(codepointMap.get(0x2200)));

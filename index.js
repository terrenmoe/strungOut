#!/usr/bin/node
'use strict';

process.on('unhandledRejection', (err) => {
  throw err;
});

const [/* basename*/, /* scriptname*/, ...pparams] = process.argv;

const {
  strungOut,
  codepoints,
  codepointMap
} = require('./src/strungOut.js');

console.log(strungOut(...pparams));
console.log(strungOut([...codepoints].slice(0x41, 0x5b).join(' ')));
console.log(strungOut(codepointMap.get(0x2200)));

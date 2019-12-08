'use strict';

/**
 * @func strungOut
 * @param {string} strungOutput a gathered collection of strings
 * @returns {string} list formed from gathered args
 */
const strungOut = (...strungOutput) =>
  strungOutput.reduce(
    (acc, cur, idx) => [...acc, `Index${idx}: ${cur.split('')}`],
    []
  );

/**
 * @const {Object} codepoints
 * @params {string}
 * @return a string valued iterator formed from the unicode points in seq
 * needs .next() method which returns an object with two props:
 * @value: the next value in the sequence
 * @done: bool of iterator completion, true if last value has been consumed.
 * @return the value prop when done===true for iterator
**/
const codepointMap = new Map(new Array(0xffff).fill(1).map(
  (cur, idx) => [idx, String.fromCodePoint(idx)]
));

const codepoints = {
  *[Symbol.iterator]() {
    for(const codepoint of codepointMap.values()) yield codepoint;
  },
  gen: (function *gen() {
    let yieldIn;
    for(const codepoint of codepointMap.values()) yieldIn = yieldIn ? yield '' : yield codepoint;
    return { done: true, value: undefined };
  }()),
  skip(n) {
    for(let i = 0; i < n; i++) this.gen.next();
  }
};

module.exports = {
  strungOut,
  codepoints,
  codepointMap,
};

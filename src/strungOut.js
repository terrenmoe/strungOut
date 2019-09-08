'use strict';

/**
 * @func strungOut
 * @params strings
 * @returns a string list formed from params
 * @returns {string}
 */
const strungOut = (...strungOutput) =>
  strungOutput.reduce(
    (acc, cur, idx) => acc.concat(`Index${idx}: ${cur.split('.')}`),
    []
  );

/**
 * @func
 * @params strings
 * @return a string valued iterator formed from the unicode points in seq
 */
// needs .next() method which returns an object with two props:
// @value: the next value in the sequence
// @done: boolean status of iterator completion, true if last
// value in sequence has been consumed.
// @return the value prop when done===true for iterator
const codepointMap = new Map(new Array(0xffff).fill(1).map(
  (cur, idx) => [idx, String.fromCodePoint(idx)]
));

const codepoints = {
  codepointMap,
  start: 0,
  step: 1,
  *[Symbol.iterator]() {
    for(let codepoint of codepointMap.values()) {
      yield codepoint;
      this.start += this.step;
    }
    this.start = 0;
  }
};

module.exports = {
  strungOut,
  codepoints,
  codepointMap,
};

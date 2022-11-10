
/**
 * Counts to 1000
 */
  function complexCalculation() {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
      return i;
    }
  };


  //Test how much time it takes to run a function 
  console.time('myTimer');
  //insert function:
  console.timeEnd('myTimer');

  /**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 * Adds two numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {NumberLike} a
 * @param {NumberLike} b
 * @returns {number} Sum of params
 * Example function
 * @param {dataType} [optionalParameterName=10] optionalParameterDescription
 * @example
 * ```js
 * // Add two numbers together yay
 * const a = 1;
 * const b = 2;
 * const sum = addNumbers(a, b);
 * // expect sum to be 3
 * ```
 */
function addNumbers(a, b = 10) {
  return a + b;
}

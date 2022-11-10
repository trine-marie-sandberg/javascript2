
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
 * Adds two numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @returns {number} Sum of params
 * @param {dataType} [optionalParameterName=10] optionalParameterDescription
  * Number or string containing number
 * @typedef {(number|string)} NumberLike
 *  * ```js
 * // Add two numbers together
 * const a = 1;
 * const b = 2;
 * const sum = addNumbers(a, b);
 * // expect sum to be 3
 * ```
 */
function addNumbers(a, b = 10) {
  return a + b;
}

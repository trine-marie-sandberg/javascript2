
/**
 * Counts to 1000
 */
export function complexCalculation() {
    for (let i = 0; i < 1000; i++) {
      // console.log(i);
    }
  };


  //Test how much time it takes to run a function 
  console.time('myTimer');
  //insert function:
  console.timeEnd('myTimer');

  /**
 * Adds two numbers together
 */
export function addNumbers(a, b) {
  return a + b;
}
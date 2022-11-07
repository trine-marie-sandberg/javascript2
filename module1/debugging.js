/**
 * Test function
 */
function complexCalculation() {
    for (let i = 0; i < 1000; i++) {
      // console.log(i);
    }
  };
  /**
   *Test how much time it takes to run a function 
   */
  console.time('myTimer');
  complexCalculation();
  console.timeEnd('myTimer');

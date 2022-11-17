//Unlike most array methods, reduce returns a single variable
//You can then modify this single variable each loop which must also be returned each loop
//This single variable then becomes the final result returned by the reduce array method once it has finished looping over all of the elements
//This single variable can be considered an “accumulator” or “total” as you typically add to it on each loop

// Numbers that we will loop through
const values = [2, 3, 5, 10, 20];

const sum = values.reduce((total, value) => {
  // Add our current element from the array to our 'total' accumulator
  total += value;
  // We have to return our 'total' accumulator
  return total;

  // You can see we are setting an initial value of 0 after the callback function
}, 0);

console.log(sum);
// Returns:
// 40

const experiment = values.reduce((previousValue, currentElement, index, array) => {
    let objectArray = [];
    objectArray.push(
        {
            previousValue: previousValue, 
            currentElement: currentElement, 
            index: index, 
            array: array
        }
        );
    console.log(objectArray);
    
    //console.log(`Previous value: ${previousValue} Current element: ${currentElement} Index: ${index} Array: ${array}`)
});
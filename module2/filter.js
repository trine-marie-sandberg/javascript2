//The filter method loops through the array and filters out items wich are then returned as a new array
//EXAMPLE
const values = [100, 200, 300, 400, 500];

const newArray = values.filter((element, index, array) => {
  // Return true if you want to keep the item in the array being returned
  // Return false if you don't want the item to be included in the array being returned
});

//PARAMETERS
//element <- the element we are working with
//index
//array <- The original array

//Implisit false return
//The filter method has an implicit false return meaning that it will always return false if you haven’t returned a value
//In most cases, you usually only have to check for true conditions

//CONDITIONAL CHECK
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => {
  if (number >= 3) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredNumbers);
// Returns:
// [3, 4, 5]
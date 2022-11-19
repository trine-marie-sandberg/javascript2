//SOME
const values = [100, 200, 300, 400, 500];

const newArray = values.some((element, index, array) => {
  // Return true if it matches your condition. If it does, it will stop iterating and return true for the result of the array
  // Return false if the condition is not matched
  console.log(`Element: ${element} Index: ${index} Array: ${array}`);
  if (element <= 300) {
    return true;
  };
});

console.log(newArray);

//PARAMETERS
//element: The current element in the array that we are working with
//index: (Optional) The current index of where we are in the array
//array: (Optional) The original array some was called on

//EVERY
const values2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = values2.every((value, index) => {
  console.log('index:', index, 'value:', value);
  if (value >= 0) {
    return true;
  }
});

console.log('didAllMatchCondition:', didAllMatchCondition);

//EXAMPLE
const modules = [
    { name: 'Introduction to Programming', isComplete: true },
    { name: 'HTML', isComplete: true },
    { name: 'CSS', isComplete: false },
    { name: 'JavaScript', isComplete: true },
  ];
  
  const isCourseFinished = modules.every((currentModule) => {
    return currentModule.isComplete === true;
  });
  
  console.log(isCourseFinished);
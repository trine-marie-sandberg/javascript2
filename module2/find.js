const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue, index) => {
  console.log('Current index: ', index);
  if (currentValue === 3) {
    return true;
  }
});

console.log('Found value:', foundValue);

//PARAMETERS
//element: The current element in the array that we are working with
//index: (Optional) The current index of where we are in the array
//array: (Optional) The original array filter was called on

//DIFFERENCE IN FIND AND FINDINDEX
//When using the find() array method, the element from the array will be returned. If no element is found, then undefined is returned.
//When using the findIndex() method, the index of the element is returned. If no element is found then -1 is returned.

//ADITIONAL INFO
//find()/findIndex() will break out once the value has been found
//This can significantly reduce compution time/increase preformance

//PRACTICAL EXAMPLE
const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find(
  (currentTemperature) => currentTemperature >= 120,
);

console.log(valueFound);

//EXAMPLE2
const users = [
  { name: 'Kari', id: 19313 },
  { name: 'Hans', id: 40202 },
  { name: 'Joakim', id: 59230 },
  { name: 'Inger', id: 14023 },
  { name: 'Ellen', id: 76339 },
];

const foundUser = users.find(({ name }) => name[0].toLowerCase() === 'j');

console.log(foundUser);
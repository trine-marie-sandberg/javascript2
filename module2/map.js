//ARRAY METHODS
//Each time our Array Methods loop, it runs a callback function

//MAP METHOD

const values = [100, 200, 300, 400, 500];
//Most of the time using array methods, we use anonymous or arrow function
const newArray = values.map(function (element, index, array) {
  console.log(element, index, array);
});


const values2 = [100, 200, 300, 400, 500];
//Separate callback function uses a named function:
function callbackFn(element, index, array) {
  // Modify and return element here
};
const newArray2 = values.map(callbackFn);


//Practical example
const ourDogs = [
  {
    owner: "Tobias, Trine",
    dogs: "Anton, Simba"
  },
  {
    owner: "Mona",
    dogs: "Emmy, Kelvin"
  },
];

const familyDogs = ourDogs.map((dogsAndOwner) => {
  return `Owner: ${dogsAndOwner.owner} Dogs: ${dogsAndOwner.dogs}`;
});

console.log(familyDogs)
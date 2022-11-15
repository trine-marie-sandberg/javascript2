//MAP METHOD

const values = [100, 200, 300, 400, 500];

const newArray = values.map(function (element, index, array) {
  console.log(element, index, array)
});

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
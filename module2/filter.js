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

//Our .filter method relies on the value being a boolean (either true or false), 
//so we could simplify the above example to return the conditional check:
const numbers2 = [1, 2, 3, 4, 5];
const filteredNumbers2 = numbers.filter((number) => number >= 3);
console.log(filteredNumbers);
// Returns:
// [3, 4, 5]

const people = [
  {
    firstName: "Lars",
    lastName: "Hansen"
  },
  {
    firstName: "Tine",
    lastName: "Bergensen"
  },
  {
    firstName: "Åse",
    lastName: "Borger"
  },
  {
    firstName: "Jan"
  }
];

//Search for a pearsons last name                                       👇 search for this person(case sensitive)
const filteredPeople = people.filter((person) => person.firstName === "Åse");
filteredPeople.forEach((person) => console.log("Lastname: " + person.lastName));
console.log(`Lastname: ${filteredPeople[0].lastName}`);

//PRACTICAL EXAMPLE
const games = [
  { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
  { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
  { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
  { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
  { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter((game) => {
  if (game.isMultiplayer === true && game.rating >= 8) {
    return true;
  }
});

console.log(filteredGames);

//The above example can be refactored to be more concise:
const filteredGames2 = games.filter(
  (game) => game.isMultiplayer && game.rating >= 8,
);

console.log(filteredGames2);
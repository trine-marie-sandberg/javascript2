//To access a value from the object, we use a key. There are two ways we can use the key to access our values:
//Dot . or bracket []
//With bracket notation, we put the key, as a string with quotation marks, in square brackets right after the Object’s name
//
const person = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    module: 'JavaScript',
  };

const firstName = person['firstName'];

console.log(firstName);

const fulName = person.firstName + " " + person.lastName;
console.log(fulName);

//We need [] notation to dynamically access object values:
const recipe = {
    ingredient_0: 'Egg',
    ingredient_1: 'Milk',
    ingredient_2: 'Flour',
  };
  
  const ingredient0 = recipe['ingredient_' + 0];
  const ingredient1 = recipe['ingredient_' + 1];
  const ingredient2 = recipe['ingredient_' + 2];
  
  //console.log(`Ingredients: ${ingredient0} ${ingredient1} ${ingredient2}`);

  for (let index = 0; index <= 2; index++) {

    const ingredient = recipe['ingredient_' + index];
    //console.log(ingredient);
  };

  //FOR...IN LOOP
  //The for...in loop used with an object will iterate over the keys of the object.
  
  for (myKey in recipe) {
    // We are looping through the keys of the object. To get the value you
    //    need to use the key (myKey) as a way to reference the key/value pair.
    console.log(recipe[myKey]);
  };

  //EXAMPLE
  const person2 = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    module: 'JavaScript',
  };
  
  for (const key in person2) {
    // Use the key to access the value from the key/value pair
    console.log('key:', key, 'value:', person[key]);
  };

  //OBJECT.KEYS()
  const myObject = {
    key1: "1",
    key2: "2"
  };
  
  const keysArray = Object.keys(myObject);
  console.log(keysArray);

  //NOTE: We can now use our array methods, such as map(), filter() and reduce() on the keys
  const keysAndValues = Object.keys(person).map((key) => {
    return `key: ${key}, value: ${person[key]}`;
  });
  
  console.log(keysAndValues);

  //OBJECT.VALUES()
  console.log(Object.values(person));

  //
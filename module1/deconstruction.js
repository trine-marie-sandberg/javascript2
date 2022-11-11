//OBJECTS
const person = {
    firstName: "Ola",
    lastName: "Nordman",
    isAdmin: false,
    nestedAdress: {
        streetNumber: 1,
        street: "Ipsumstead",
    },
};

//Aliasing (changing👇property name)
const { firstName: userName, lastName, isAdmin } = person;

console.log(userName, lastName, isAdmin);


function greetUser({
//Aliasing (changing👇property name)    
    firstName: userName, 
    lastName, 
    nestedAdress: {street, streetNumber}
}) {

    console.log("Hi", userName, lastName, "adress: ", street, streetNumber );
};

greetUser(person);

//ARRAYS
const myArray = [230, 59, 390, 348, 1239, 854934, 4839, 82393, 89248];
//can have any 👇name
const [firstValue, 
    //secondValue, 👈skipped
    , thirdValue
    //select all 👇remaining numbers (exept skipped number)
    , ...remainingNumbers
] = myArray;

console.log(firstValue, thirdValue, "remainding numbers: ", remainingNumbers);

//practical example 👇
const coordinates = [49, 20];
const [x, y] = coordinates;

console.log("coordinates: ", "x: ", x, "y: ", y)

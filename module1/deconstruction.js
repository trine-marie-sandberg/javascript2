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

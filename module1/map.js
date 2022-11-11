//Map is an object and holds key/value pairs.
//However there are some differences: 
//A normal objects order is unreliable, but the order in a Map object remains the way wich they are added.
//A map's key can be any value. Included function, objects and primitives (object keys must be string or symbol).

const myMap = new Map();

//Set key/value
myMap.set("key", "value");
console.log(myMap.get("key"))

//Delete a value from Map object
myMap.delete("key");
console.log(myMap.get("key"));

//multiple items in a Map
const newMap = new Map();
newMap.set("key1", 1);
newMap.set("key2", 2);
//Log number of items in a Map
console.log(newMap.size);

//One cannot directly use JSON.stringify() on a map.
//https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map 

//LESSON TASK
const users = new Map();
users.set(12, {firstName: "Ola", lastName: "Nordmann"});
console.log(users.size);

users.set(50, {firstName: "Kari",})
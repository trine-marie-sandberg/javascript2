//Map is an object and holds key/value pairs. 
//A normal objects order is unreliable, but the order in a Map object is remembered.
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
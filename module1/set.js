//A Set object store unique values of any type. Set values can be itterated on. 
const mySet = new Set();
mySet.add("unique value1");
mySet.add("unique value2");
console.log(mySet);

//check if value exists
console.log(mySet.has("unique value"));
console.log(mySet.has("unique value1"));

//Delete an item from a set
console.log(mySet.size);
mySet.delete("unique value2");
console.log(mySet.size);
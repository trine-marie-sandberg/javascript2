//A callback is a function you pass to another function as an argument
//We can use asynchronous callbacks to deal with asynchronous code

const values = [5, 10, 15, 20];
//        👇function
function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}
//                        👇passed into function
const newValues = values.filter(isBiggerThan10);
console.log(newValues);

//Asynchronous callbacks
//Asynchronous callbacks work by nesting callbacks
//asynchronous callbacks had a problem where you kept chaining asynchronous 
//callbacks inside of other asynchronous callbacks

//Callback hell:
//asyncFunction(function () {
//    asyncFunction(function () {
//      asyncFunction(function () {
//        asyncFunction(function () {
//          // ...
//        });
//      });
//    });
//  });

//Fortunately, newer tools (promises and async await) were released that allows us to write cleaner code
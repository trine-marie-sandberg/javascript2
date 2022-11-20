//A Promise object is designed for asynchronous code
// It will handle different states for you when dealing with asynchronous code, such as a success or failed state
//Promises were introduced to JavaScript ES6 (ES2015). They are built on top of callbacks

//A promise will be in one of these states when you are working with them:
//pending: Initial state. When it is not in fulfilled or rejected it will be in this state
//fulfilled: The operation was successful
//rejected: The operation failed

//.then() and chaining
//then() block will run only after the previous code has finished running
// We fetch the data from the URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json));
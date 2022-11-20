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

  //.catch()
  //doSomething()
  //.then()
  //.catch(error =>
    // Handle the error here
  //);

  //.fetch()
  fetch('abc')
  .then((response) => response.json())
  .then((json) => console.log(json))
  // An error is going to be thrown causing the code below
  // to run
  .catch((error) => {
    console.log('An error has been thrown');
    console.log(error);
  });

  //.finally() will always run regardless of whether there was an error or not
  let isLoading = true;
  console.log(isLoading)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
  .finally(
    isLoading = false
  );
  console.log(isLoading);
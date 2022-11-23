//Async/Await allows us to writhe our code in a sequential way while still handling asynchronous code
//async: This keyword must be added to the start of a function declaration so that it becomes an “async” function
//We have to include this to make use of the await keyword
//await: This keyword must be added at the start of any function call that needs to be dealt with asynchronously

// Fetches data from the URL passed in
async function doFetch(url) {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  }
  
  // Our main function that will call the data
  // using await. If we don't use await then we will
  // instead get a promise
  async function main() {
    const articles = await doFetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    console.log(articles);
    // Returns:
    // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
  }
  
  // Execute our code
  main();

//try: This is our main code that we attempt to run, such as fetching data from an API
//catch: This block of code will only execute if there was a problem with the code in the try block, such as an error being thrown
//finally: This is an optional block of code which will run regardless of whether the try block was successful
  
//Multiple parallel requests
//We can use the Promise.all() helper function to get data from multiple API end points
//It takes multiple promises and then returns a single array containing all of the results as different items in the array
//If we were to use async await, then we would have to wait for each request to finish sequentially, which may not be efficient

const promise1 = Promise.resolve('Promise 1 result');
const promise2 = Promise.resolve('Promise 2 result');
const promise3 = Promise.resolve('Promise 3 result');

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//PRACTICAL EXAMPLE
async function doFetch(url) {
    try {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  let dataArray = [];

  async function main() {
    
    const data = await Promise.all([
      doFetch('https://jsonplaceholder.typicode.com/todos/1'),
      doFetch('https://jsonplaceholder.typicode.com/todos/2'),
      doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);

    dataArray.push(data);
    return dataArray; 
  };
  
  main();
  console.log(dataArray);
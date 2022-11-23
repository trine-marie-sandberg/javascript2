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
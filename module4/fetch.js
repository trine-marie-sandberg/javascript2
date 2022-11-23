//fetch(url, options);
//options: This is an optional options parameter where you can modify the request you are making
//You can change the type of HTTP request method, change headers, add data etc
//This options object lets us modify our network request and include data if we are sending data instead of fetching it

//POST EXAMPLE
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  //AlTERNATIVE
  // An object that contains our options
const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  
  // Using the `fetchOptions` object we created aboves
  fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));
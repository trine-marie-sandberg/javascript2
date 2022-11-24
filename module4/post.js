//The GET request mode is the default mode when doing a fetch, but for POST we need to include a method
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

  //The request options object are saved in a variable 
  const requestOptionsObject = {
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
                        //And passed into the fetch method here👇
  fetch('https://jsonplaceholder.typicode.com/posts', requestOptionsObject)
    .then((response) => response.json())
    .then((json) => console.log(json));
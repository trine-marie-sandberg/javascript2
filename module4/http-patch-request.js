//The HTTP PATCH request method will update (modify) data at a specified resource
//This is intended to do a partial update instead of replacing an item entirely
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Dummy data',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
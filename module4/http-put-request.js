//The HTTP PUT request method will replace data at the target resource
//We are targeting a resource so we will need to add an identifier at the end of the URL, such as an ID
              //remember to add identifier to url👇
fetch('https://jsonplaceholder.typicode.com/posts/1', { //👈👇 body object/optional parameter
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
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
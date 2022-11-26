//The HTTP DELETE request method will delete data from a specified location
//When deleting a request, we usually need to indicate something, such as an id
//we would usually need a URL like www.example.com/1, where 1 is the ID of the post we want to delete
//If status is 400 and ok is true, it indicates that our request was successful
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}).then((response) => {
  console.log(response);
});
//If our response wasn’t successful, then we wouldn’t have a status of 200 and ok would be false
//both status 200 and ok true???
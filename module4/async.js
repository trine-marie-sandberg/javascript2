//Asynchronous code is code that can run independently of our program flow
//Unlike Synchronous code wich runs in sequence (line after line) 
//Asynchronous code will run without blocking or blocking the main program

//setTimeout method is Asynchronous
console.log('Console.log BEFORE timer');
// Creating a timer
setTimeout(() => {
  console.log('Code inside of timer');
}, 3000);
console.log('Console.log AFTER timer');
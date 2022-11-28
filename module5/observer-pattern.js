//The Observer pattern is an OOP (Object-Oriented Programming) pattern
//It works by having one object be notified when another object changes
//There are three main components to the observer pattern:
//1.The Subject: Maintains a list of observers and manages adding/removing of observers
//2.The Observer: An interface for interacting with the objects
//3.The Objects: These are objects that have been linked to the observer

//EXAMPLE
function Subject() {
    // This will contain our objects that are subscribed to
    // our subject
    this.observers = [];
  }
  
  Subject.prototype = {
    // This "subscribe" function adds objects to our
    // observer
    subscribe: function (functionToAdd) {
      this.observers.push(functionToAdd);
    },
    // This "unsubscribe" function removes objects to our
    // observer
    unsubscribe: function (functionToRemove) {
      this.observers = this.observers((currentFunction) => {
        if (currentFunction != functionToRemove) {
          return currentFunction;
        }
      });
    },
    // This "fire" function calls for all of our subscribed
    // objects to act
    fire: function () {
      this.observers.forEach((currentFunction) => {
        currentFunction.call();
      });
    },
  };
  
  // This example function will get added to the
  // Subject
  function ExampleFunction1() {
    console.log('Example function 1');
  }
  
  // This example function will also get added to the
  // Subject
  function ExampleFunction2() {
    console.log('Example function 2');
  }
  
  // Creating a new subject which we will add our
  // example functions to
  const subject = new Subject();
  
  // Adding both of our example functions to our subject
  subject.subscribe(ExampleFunction1);
  subject.subscribe(ExampleFunction2);
  
  // Firing our subject with a single function which
  // will then cause both of our subscribed functions to
  // react
  subject.fire();
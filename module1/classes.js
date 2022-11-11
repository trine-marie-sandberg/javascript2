//A class is a template that uses objects like blueprints to shape the data.
//In programming, a class contains properties and methods.
//Properties are variables inside a class, and methods are functions.
//Classes form the basis of object oriented programming (OOP), but are not used often in JavaScript.

//EXAMPLE
class MyClass {
    // This is a property in our class
    basicProperty = 'My basic property';
    // This is another property however it isn't initialized to a value
    emptyProperty;
    // The constructor lets us set values when we create an instance of a class
    constructor(myInitialValue) {
      // A property 'myInitialValue' being initialized to an argument
      this.myInitialValue = myInitialValue;
    }
  
    // A method in the class
    myMethod() {
      console.log(this.myInitialValue);
    }
  }
  // Logs:
  // Hello world
  const myClassInstance = new MyClass('Hello world');
  myClassInstance.myMethod();

  //Practical example
  class Person {
               //👇
    constructor(firstName) {
        this.firstName = firstName;
    };

    greet() {
        console.log("Hello", this.firstName)
    }
  };
                         //👇
  const ola = new Person("Ola");
  const userId2 = new Person("Ida");
  ola.greet();
  userId2.greet();

  //Static methods and properties
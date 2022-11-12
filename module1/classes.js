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

  //STATIC METHODS AND PROPERTIES

  //Static methods and properties allow us to create methods,
  //and properties that are attached to the main class itself instead of the instance of a class.
  class User {
    constructor(name) {
      this.name = name;
    }
  
    // This method is available to all instances of a class
    greetUser() {
      console.log(`Hello ${this.name}!`);
    }
  
    static company = 'Acme';
  
    // This method is available only on the User class itself
    static displayTime() {
      console.log('12:00');
    }
  }
  
  const newUser = new User('Ola Nordmann');
  
  // This is called on the new instance of the class
  newUser.greetUser();
  // Logs:
  // Hello Ola Nordmann
  
  // The static property 'company' is only available on the class itself
  console.log(User.company);
  // Logs:
  // Acme
  
  // The static method 'displayTime()' is only available on the class itself
  User.displayTime();
  // Logs:
  // 12:00

  //EXTENDING A CLASS

  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Cat extends Animal {
    //
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} goes meow`);
    }
  }
  
  const sheep = new Animal('Lambert');
  sheep.speak();
  // Logs:
  // Lambert makes a sound
  
  const cat = new Cat('Pookie');
  cat.speak();
  // Logs:
  // Pookie goes meow
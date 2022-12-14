//The Singleton pattern allows us to create a unique object that is only created once
//and ensures we won’t have duplicate objects
//Principles:
//1.A person requests an object
//2.If this object doesn’t exist, we create a new object, store it and then return it
//3.If this object does exist, we return it
//EXAMPLE
const Singleton = (function () {
    // This is our main instance data
    let instance;
  
    // This creates a new instance
    function createInstance() {
      const object = { message: 'Hello world' };
      return object;
    }
  
    return {
      // We return our instance, but we first check if it
      // doesn't exist. If it doesn't exist, we create a new
      // one before we return
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1);
  // Logs: {message: 'Hello world'}
  console.log(instance2);
  // Logs: {message: 'Hello world'}
  console.log('Is the same object:', instance1 === instance2);
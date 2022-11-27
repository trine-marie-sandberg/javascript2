//An object literal forms part of the module pattern that we will soon be looking at
//An object literal is an object that contains key/value pairs which are comma-separated
//The key/value pairs can have properties and methods assigned to them
//If you want to access a value within the object, you would use the this property

//EXAMPLE
const shoppingCart = {
    // Stores the cart items
    cart: [],
    // Adds a single item to the 'cart' array
    addToCart: function (item) {
      this.cart.push(item);
    },
    // Displays the contents of the cart
    getCartItems: function () {
      console.log('Cart:', this.cart);
    },
  };
  
  // Add an item to the cart
  shoppingCart.addToCart({ name: 'Milk', price: 9.99 });
  shoppingCart.addToCart({ name: 'Egg x 12', price: 12.0 });
  // Display the cart contents
  shoppingCart.getCartItems();

  //SETTERS AND GETTERS
  //ECMAScript 5 (ES5 2009) introduced getters and setters to JavaScript
  //A getter gets a value back for us whereas a setter sets a value for us
  //example
  const user = {
    _firstName: 'John',
  
    // The 'setter'
    set firstName(newFirstName) {
      this._firstName = newFirstName;
    },
  
    // The 'getter'
    get firstName() {
      return this._firstName;
    },
  };
  
  // Use the 'firstName' setter
  user.firstName = 'Ola';
  // Use the 'firstName' getter
  console.log(user.firstName);
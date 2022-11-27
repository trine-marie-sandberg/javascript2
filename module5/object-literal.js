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
  // Display the cart contents
  shoppingCart.getCartItems();
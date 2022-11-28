//The module pattern is similar to the object literal, and it makes use of the IIFE pattern
//IIFE = Immediately-Invoked Function Expressions
//annonymous function imidiately called with (); at the end
//Developers would use the public variables and methods to indirectly access and change the private variables and methods
//typically through the use of private methods called “getters” and “setters”

//EXAMPLE
const shoppingCart = (function () {
    const _cart = [];
  
    function addToCart(item) {
      _cart.push(item);
    }
  
    function getCartItems() {
      // Return a new array
      return [..._cart];
    }
  
    return {
        //Public methods
      addToCart,
      getCartItems,
    };
  })();
  
  shoppingCart.addToCart({ name: 'Milk', price: 19.99 });
  console.log(shoppingCart.getCartItems());
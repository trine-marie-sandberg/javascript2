//We can use JavaScript to navigate programmatically
// Get the button with id of "btn"
const button = document.getElementById('btn');

// These values are hardcoded here, but they could come from another
// source such as an API
const firstName = 'Ola';
const lastName = 'Nordmann';

// Add a "click" event listener that calls "onButtonClick"
button.addEventListener('click', onButtonClick);

// This function will fire each time the button is clicked
function onButtonClick() {
  // Replace the URL with our newly created URL that contains our
  // dynamic URL parameters
  window.location.replace(
    `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`,
  );
};

//We can get the whole parameter string with window.location.search
const parameterString = window.location.search;
console.log("Location: " + parameterString);
//URLSearchParams() is a function which will parse the query string for us and allow us to get specific values, among other features
const searchParameters = new URLSearchParams(parameterString);
console.log(searchParameters)
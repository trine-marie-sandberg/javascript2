//FACTORY FUNCTION EXAMPLE
function createPerson(firstName, lastName, country, city) {
    return {
      firstName: firstName,
      lastName: lastName,
      address: {
        country: country,
        city: city,
      },
      greet: function () {
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
      },
    };
  }
  
  const ola = createPerson('Ola', 'Nordmann', 'Norway', 'Oslo');
  ola.greet();

  //LESSON TASK
  function createAnimal(name, species, food) {
    return {
        // name: name,
        // species: species,
        // food: food,
        animalEats: function () {
            console.log(`${name} is a ${species} and eats ${food} food`);
        },
    };
  };

  const myAnimal = createAnimal("Anton", "dog", "dog food");
  myAnimal.animalEats();
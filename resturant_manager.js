class RestaurantManager {

    constructor(){
        // Array to hold restaurant objects
        this.restaurantList = [];
    }

    addRestaurant(name,address,city){
           
        // push method inserts the data into an array
        this.restaurantList.push({name,address,city})     
    }

    printAllRestaurantNames(){

       // Prints the names of all restaurants in the list
        this.restaurantList.forEach( restaurantObject => console.log("Printing",restaurantObject.name))
    }

    filterRestaurantByCity(city){
      return this.restaurantList.filter(restaurant => restaurant.city === city)
    }
}

// create a object instance of RestaurantManager
const manager1 = new RestaurantManager();  //  constructor gets called
const manager2 = new RestaurantManager(); 

manager1.addRestaurant('Cafe Mocha', '123 Brew Lane', 'New York');
manager1.addRestaurant('Pizza Place', '456 Cheese Street', 'Chicago');
manager1.addRestaurant('Sushi World', '789 Fish Ave', 'New York');
manager1.addRestaurant('A2B', 'street1', 'Bangalore');
manager1.addRestaurant('Emperor', 'street2', 'Bangalore');
manager1.addRestaurant('BBQ', 'street3', 'Bangalore');

manager2.addRestaurant('Cafe Mocha', '123 Brew Lane', 'New York');
manager2.addRestaurant('Pizza Place', '456 Cheese Street', 'Chicago');


console.log('RestaurantList :', manager.restaurantList)
console.log('No of Restaurant :', manager.restaurantList.length)
// Print all restaurant names
manager.printAllRestaurantNames();

// find resturants in new york
const restaurantsInNewYork  = manager.filterRestaurantByCity('New York');
console.log("New York based restuarants",restaurantsInNewYork);

// find the restuarants in bangalore

const restaurantsInBangalore= manager.filterRestaurantByCity('Bangalore');
console.log("Bangalore based restuarants",restaurantsInBangalore);
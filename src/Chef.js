class Chef {
  constructor(chefName, restaurantName) {
    this.name = chefName;
    this.restaurant = restaurantName
  }
  greetCustomer(customerName, isMorning) {
    if (isMorning) {
      return `Good morning, ${customerName}!`
    }
    return `Hello, ${customerName}!`
  }

  checkForFood(requestedFood) {
    if (this.restaurant.menus[requestedFood.type].includes(requestedFood)) {
      return `Yes, we're serving ${requestedFood.name} today!`
    }
    return `Sorry, we aren't serving ${requestedFood.name} today.`
  }
}

module.exports = Chef

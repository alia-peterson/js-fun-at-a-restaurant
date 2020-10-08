function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  }
}

function addMenuItem(restaurantName, menuItem) {
  if (restaurantName.menus[menuItem.type].includes(menuItem) === false) {
    restaurantName.menus[menuItem.type].push(menuItem)
  }
  return restaurantName
}

function removeMenuItem(restaurantName, menuItem, menuItemType) {
  const inMenu = restaurantName.menus[menuItemType].some(food => food.name === menuItem)
  if (inMenu) {
    restaurantName.menus[menuItemType].pop()
    return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
  } else {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }
}

// similar to the order.js exercise, i found an existing function that uses
// arrow functions, hopefully that's okay! the alternative would have been
// a for loop which would look at all objects in the array and check if
// any of the object.name's === menuItem

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

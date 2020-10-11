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
  const menuArray = restaurantName.menus[menuItemType]
  const indexOfMenuItem = menuArray.indexOf(menuItem)

  for (var i = 0; i < menuArray.length; i++) {
    if (menuArray[i].name === menuItem) {
      menuArray.splice(indexOfMenuItem, 1)
      return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

// function removeMenuItem(restaurantName, menuItem, menuItemType) {
//   const inMenu = restaurantName.menus[menuItemType].some(food => food.name === menuItem)
//   const menuArray = restaurantName.menus[menuItemType]
//   const indexOfMenuItem = menuArray.indexOf(menuItem)
//
//   if (inMenu) {
//     menuArray.splice(indexOfMenuItem - 1, 1)
//     return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
//   } else {
//     return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
//   }
// }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

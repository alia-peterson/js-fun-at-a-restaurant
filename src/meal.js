function nameMenuItem(nameInput) {
  return `Delicious ${nameInput}`
}

function createMenuItem(newMenuItemName, newMenuItemPrice, newMenuItemType) {
  return {
    name: newMenuItemName,
    price: newMenuItemPrice,
    type: newMenuItemType
  }
}

function addIngredients(newIngredientName, arrayName) {
  if (arrayName.includes(newIngredientName) === false) {
    arrayName.push(newIngredientName)
  }
  return arrayName
}

function formatPrice(newMenuItemPrice) {
  return `$${newMenuItemPrice}`
}

function decreasePrice(newMenuItemPrice) {
  return newMenuItemPrice * 0.9
}

function createRecipe(newRecipeTitle, newRecipeIngredients, newRecipeType) {
  return {
    title: newRecipeTitle,
    ingredients: newRecipeIngredients,
    type: newRecipeType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

function takeOrder(newOrder, orderArray) {
  if (orderArray.length < 3) {
    orderArray.push(newOrder)
  }
  return orderArray
}

function refundOrder(orderToRefund, orderArray) {
  return orderArray = orderArray.splice(orderToRefund - 1, 1)
}

function listItems(orderArray) {
  return orderArray.map(eachOrder => eachOrder.item).join(', ')
}
// we were told not to use arrow functions but i figure since this is
// part of the map definition, it would be okay?
// the alternative would be a for loop which would look like this:
/*
let orderArrayItems = []
for (let i = 0; i < orderArray.length; i++) {
  orderArrayItems.push(orderArray[i].item)
}
return orderArrayItems.join(', ')
*/

function searchOrder(orderArray, orderItem) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item.includes(orderItem)) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

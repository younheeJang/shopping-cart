export const plusCartItem = (counter) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload:{
            counter
        }
    }
}

export const addToCart = (product) => {
    console.log(product)
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};

export const removeFromCart = (productId) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};

export const updateCartQuantity = (productId, quantity) => {

  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};
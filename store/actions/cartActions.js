import { HYDRATE } from "next-redux-wrapper";

export const plusCartItem = (counter) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload:{
            counter
        }
    }
}

export const minusCartItem = (counter) => {
    return {
        type: 'MINUS_CART_ITEM',
        payload: {
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

export const removeFromCart = (id) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id: id
        }
    }
};

export const updateCartQuantity = (id, quantity) => {

  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          id,
          quantity: quantity
      }
  }
};
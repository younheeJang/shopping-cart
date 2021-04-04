import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    cart: [],
    counter: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
  
      let cart = state.cart;
      let counter = state.counter;
  
      switch(action.type) {
        case HYDRATE:
                // Attention! This will overwrite client state! Real apps should use proper reconciliation.
                return {...state};
          case 'PLUS_CART_ITEM':
              counter++;
              return {
                  ...state,
                  counter: counter
              }

          case 'MINUS_CART_ITEM':
              counter--;
              return{
                  ...state,
                  counter: counter
              }
  
          case 'ADD_TO_CART':
  
              cart.push(action.payload);
  
              return {
                  ...state,
                  cart: cart
              };
          case 'UPDATE_CART_QUANTITY':
  
              let item = cart.find(item => item.product.id == action.payload.id);
  
              let newCart = cart.filter(item => item.product.id != action.payload.id);
  
              item.quantity = action.payload.quantity;
  
              newCart.push(item);
  
              return {
                  ...state,
                  cart: newCart
              };
  
          case 'REMOVE_FROM_CART':
              return {
                  ...state,
                  cart: cart.filter(item => item.product.id != action.payload.id)
              };
          default:
              return state;
      }
  };
  
  export default cartReducer;
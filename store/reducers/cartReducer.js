import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    cart: [],
    counter: 0,
    pricingInfos:[],
    idInCart:[]
  };
  
  const cartReducer = (state = initialState, action)  => {
  
      let cart = state.cart;
      let counter = state.counter;
      let pricingInfos = state.pricingInfos;
      let idInCart = state.idInCart;
   
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
  
          case 'REMOVE_FROM_CART':
              return {
                  ...state,
                  cart: cart.filter(item => item.product.id != action.payload.id)
              };
          case 'ADD_PRICING_INFO':
                
              return{
                  ...state,
                  pricingInfos: pricingInfos.concat(action.payload)
              }
          case 'REMOVE_PRICING_INFO':             
              return{
                  ...state,
                  pricingInfos:  pricingInfos.filter(item => item.pricingInfo.id != action.payload.id)
              }
          case 'ADD_ID_TO_INCART': 
                idInCart.push(action.payload.id);
              return{
                  ...state,
                  idInCart: idInCart
              }
           case 'REMOVE_ID_FROM_INCART':
              return{
                  ...state,
                  idInCart:  idInCart.filter(item => item != action.payload.id)
              }
              
          default:
              return state;
      
        }
  };
  
  export default cartReducer;
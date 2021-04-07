import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    pricingInfos:[]
  };
  
  const pricingReducer = (state = initialState, action)  => {
  
      let pricingInfos = state.pricingInfos;
   
      switch(action.type) {
          case HYDRATE:
                // Attention! This will overwrite client state! Real apps should use proper reconciliation.
              return {...state};
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
              
          default:
              return state;
      
        }
  };
  
  export default pricingReducer;
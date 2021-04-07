
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './reducers/cartReducer'
import pricingReducer from './reducers/pricingReducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  cartReducer,
  pricingReducer
})

const reducer = (state, action) => {
  
   if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.cartReducer.cartReducer) nextState.cartReducer.cartReducer = state.cartReducer.cartReducer
    if (state.pricingReducer.pricingReducer) nextState.pricingReducer.pricingReducer = state.pricingReducer.pricingReducer
    // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)

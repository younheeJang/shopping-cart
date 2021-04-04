import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from 'react-redux';


const CartItems = () => {
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer.cart);
    
    console.log(cartItems)
    return (
       <>
       <div></div>
       </> 
    )
}

export default CartItems;
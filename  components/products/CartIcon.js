import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {addToCart} from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux';
const CartIcon = ({Id, CoverImage, Title, Price, AvailableCoupon}) => {
    const dispatch = useDispatch();
    const [inCart, setInCart] = useState(false);
    console.log(Id, CoverImage, Title, Price, AvailableCoupon)
    const add = (e) => {
        e.preventDefault();
        if(typeof AvailableCoupon!=='undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price, availableCoupon:AvailableCoupon}))
        else if(typeof AvailableCoupon === 'undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price}))
        setInCart(!inCart)
    }
    return (
        <div >
        {!inCart &&  <img  onClick={add} className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-add.png' />}
        {inCart &&  <img  className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-remove.png' />}
        </div>
       
    )
}

CartIcon.propTypes ={
    Id: PropTypes.string.isRequired,
    CoverImage: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    AvailableCoupon: PropTypes.bool
}
export default CartIcon;
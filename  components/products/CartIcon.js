import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addToCart, plusCartItem } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartIcon = ({Id, CoverImage, Title, Price, AvailableCoupon}) => {
    
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.cartReducer.counter);
    console.log(counter)
    console.log(Id, CoverImage, Title, Price, AvailableCoupon)

    const add = (e) => {
        e.preventDefault();
        if(counter === 3){
            alert("U can save items til max 3!")
            return
        }
        
        if(typeof AvailableCoupon!=='undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price, availableCoupon:AvailableCoupon}))
        else if(typeof AvailableCoupon === 'undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price}))
        dispatch(plusCartItem());
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
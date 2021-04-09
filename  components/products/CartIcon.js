import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from 'react-redux';
import { addToCart, plusCartItem, minusCartItem, removeFromCart, addIdToInCart, removeIdFromInCart } from '../../store/actions/cartActions'



const CartIcon = ({Id, CoverImage, Title, Price, AvailableCoupon, IdInCart}) => {
    
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.cartReducer.counter);
    const same = (id) =>  id === Id;

    useEffect(() => {
        
        if(IdInCart.length > 0) setInCart(IdInCart.some(same))
        if(IdInCart.length ===0) setInCart(false)
    }, [IdInCart])
   
    const add = (e) => {
        e.preventDefault();
        if(counter === 3){
            alert("U can save items til max 3!")
            return
        }
        
        if(typeof AvailableCoupon!=='undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price, availableCoupon:AvailableCoupon, quantity: 1}))
        else if(typeof AvailableCoupon === 'undefined')  dispatch(addToCart({id: Id, coverImage: CoverImage, title: Title, price:Price, quantity:1}))
        dispatch(plusCartItem()); 
        dispatch(addIdToInCart(Id))
        setInCart(!inCart)
    }

    const remove = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(Id))
        dispatch(minusCartItem());
        dispatch(removeIdFromInCart(Id))
        setInCart(!inCart)
    }
    return (
        <div >
        {!inCart &&  <img  onClick={add} className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-add.png' />}
        {inCart &&  <img  onClick={remove} className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-remove.png' />}
        </div>
       
    )
}

CartIcon.propTypes ={
    Id: PropTypes.string.isRequired,
    CoverImage: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    AvailableCoupon: PropTypes.bool,
    idInCart: PropTypes.array
}
export default CartIcon;
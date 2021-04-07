import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPricingInfo, removePricingInfo } from '../../store/actions/cartActions';

const CheckBox= ({Id, Price, AvailableCoupon}) => {

    let [quantity, setQuantity] = useState(1)
    let [itemPrice, setItemPrice] = useState(Price)
    
    const dispatch = useDispatch();
    
    const getPriceFromCheckedItem = async(e) => {
        
        const { target: { checked } } = e;
        if(checked === true){          
            await dispatch(addPricingInfo({id: Id, price: itemPrice, availableCoupon: AvailableCoupon}))
        }
        else if(checked === false){
            await dispatch(removePricingInfo(Id))
        }
     
    }

    const plus = (e) =>{
        e.preventDefault();
        setQuantity(++quantity)
        itemPrice = quantity * Price
        setItemPrice(itemPrice) 
    }   

    const minus = (e) => {
        e.preventDefault();
        if(quantity === 1) return alert('Qty cannot be zero!')
        else{
            setQuantity(--quantity)
            itemPrice = itemPrice - quantity * Price
            setItemPrice(itemPrice) 
        }

    }
   
    return (
       <>
        <div onClick={plus} className="col-start-3 col-span-1 m-1">
            <img className="float-left h-5 w-5 cursor-pointer" alt="curious" src='/icons/plus.png' />   
        </div>
        <p className="col-start-4 col-span-1">{quantity}</p>
        <div onClick={minus} className="col-start-5 col-span-1 m-1">   
            <img className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/minus.png' />
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base col-start-7 col-span-3">{itemPrice}</p>
        
        <input price={itemPrice} type="checkbox" className="checked:border-transparent checked:bg-gray-500 h-5 w-5 m-1"  onChange={(e)=>getPriceFromCheckedItem(e)} />
        
       </> 
    )
}


CheckBox.propTypes ={
    Id: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    AvailableCoupon: PropTypes.bool
}
export default CheckBox;
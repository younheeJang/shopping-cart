import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from 'react-redux';


const CalculatingCart = ({Id, Price, AvailableCoupon}) => {
    
  
    const [checked, setChecked] = useState(false)
    let [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const plus = (e) =>{
        e.preventDefault();
        setQuantity(++quantity)
        
    }    
    const minus = (e) => {
        e.preventDefault();
        if(quantity === 1) return alert('Qty cannot be zero!')
        setQuantity(--quantity)
    }
   
    return (
       <>
        <p className="col-start-3 col-span-2">Qty: {quantity}</p>
        <div onClick={plus} className="col-start-5 col-span-1 m-1">
            <img className="float-left h-5 w-5 cursor-pointer" alt="curious" src='/icons/plus.png' />   
        </div>
        <div onClick={minus} className="col-start-6 col-span-1 m-1">   
            <img className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/minus.png' />
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base col-start-7 col-span-3">{Price}</p>
        <input type="checkbox" className="checked:border-transparent checked:bg-gray-500 h-5 w-5 m-1" checked={checked} onChange={()=>{setChecked(!checked)}} />
          
       </> 
    )
}

CalculatingCart.propTypes ={
    Id: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    AvailableCoupon: PropTypes.bool,
}
export default CalculatingCart;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from 'react-redux';


const CheckBox = () => {
    
  
    const [checked, setChecked] = useState(false)
  
    console.log(checked)
    return (
       <>
       
            <input type="checkbox" className="checked:border-transparent checked:bg-gray-500 h-5 w-5 " checked={checked} onChange={()=>{setChecked(!checked)}} />
          
       </> 
    )
}

export default CheckBox;
import React, { useState, useEffect } from 'react';

const PresentCartIcon = () => {
    const [active, setActive] = useState(false)
    
    return (
        <div onClick={()=>{setActive(!active)}}>
        {!active &&  <img  className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-add.png' />}
        {active &&  <img  className="h-5 w-5 cursor-pointer" alt="curious" src='/icons/shopping-remove.png' />}
        </div>
       
    )
}

export default PresentCartIcon;
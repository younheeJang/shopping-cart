import {  useSelector  } from 'react-redux';
import PropTypes from 'prop-types';
import { justAdd } from '../../lib/pricing';
import React, { useState, useEffect } from 'react';

const Pricing = ({Coupons}) => {

    const pricingInfos = useSelector((state) => state.cartReducer.pricingInfos);
    console.log(pricingInfos)
    let [totalPrice, setTotalPrice] = useState(0); 
    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        if(pricingInfos.length > 0) setTotalPrice(justAdd(pricingInfos))
        if(pricingInfos.length ===0) setTotalPrice(0)
    })
        
        
    
    
    return(
        <>
          <div className ="flex w-full grid grid-cols-12 m-1 justify-items-center">
          <div className="col-start-7 col-end-12 mb-10">
            {Coupons && Coupons.map(({type, title, discountRate, discountAmount}) => <button key={type} data-rate={discountRate} data-amount={discountAmount} className="focus:outline-black float-left mr-2 mb-1 bg-blue-500 text-white p-2 rounded leading-none flex items-center text-xs">{title}</button>)}
          </div>
          <div className="col-start-2 col-end-6">
              <p className='uppercase font-medium text-lg'>Priced: {totalPrice}</p>
          </div>
          <div className="mb-20"></div>
          </div>
        </>
    )
}
Pricing.prototypes = {
    Coupons:PropTypes.array.isRequired
}
  export default Pricing
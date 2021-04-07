import {  useSelector  } from 'react-redux';
import { justAdd } from '../../lib/pricing';
import React, { useState, useEffect } from 'react';

const Pricing = () => {

    const pricingInfos = useSelector((state) => state.cartReducer.pricingInfos);
    console.log(pricingInfos)
    let [totalPrice, setTotalPrice] = useState(0); 
    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        if(pricingInfos.length > 0) setTotalPrice(justAdd(pricingInfos))
    })
        
        
    
    
    return(
        <>
          <div className ="flex w-full grid grid-cols-12 m-1 justify-items-center">
          <div className="col-start-9 col-end-12 mb-10">
              <button type="button" className="focus:outline-black float-left mr-2 bg-blue-500 text-white p-2 rounded leading-none flex items-center text-xs">
                  10%
              </button>
              <button type="button" className="focus:outline-black mr-2 bg-blue-500 text-white p-2 rounded leading-none flex items-center text-xs">
                  만원
              </button>
          </div>
          <div className="col-start-2 col-end-6">
              <p className='uppercase font-medium text-lg'>Priced: {totalPrice}</p>
          </div>
          <div className="mb-20"></div>
          </div>
        </>
    )
}

  export default Pricing
import {  useSelector  } from 'react-redux';
import { justAdd } from '../../lib/pricing';
import React, { useState } from 'react';

const Pricing = () => {

    const pricingInfos = useSelector((state) => state.cartReducer.pricingInfos);
    return(
        <>
          <div className ="flex w-full grid grid-cols-12 m-1 justify-items-center">
          <div className="col-start-9 col-end-12">
              <button type="button" className="focus:outline-black float-left mr-2 bg-blue-500 text-white p-2 rounded leading-none flex items-center text-xs">
                  10%
              </button>
              <button type="button" className="focus:outline-black mr-2 bg-blue-500 text-white p-2 rounded leading-none flex items-center text-xs">
                  만원
              </button>
          </div>
          <div className="col-start-2 col-end-6">
              {pricingInfos&&pricingInfos.map(({pricingInfo}) => <div key={pricingInfo.id}>{pricingInfo.price}</div>)}
              <p className='uppercase font-medium text-lg'>Priced: </p>
          </div>
          </div>
        </>
    )
}

  export default Pricing
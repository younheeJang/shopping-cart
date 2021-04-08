export const justAdd = (pricingInfos) => {
    const prices = pricingInfos.map(({pricingInfo}) => pricingInfo.price)
    const result = prices.reduce((accumulator, currentValue) => accumulator + currentValue)
    return result
    }
  
  const floor = (value) => {
    return Math.floor(value)
  }

  const couponAvailable = (infos) => {
    return infos.filter(({pricingInfo}) => pricingInfo.availableCoupon !== false);
  }
  
  const couponNotAvailable = (infos) => {
    return infos.filter(({pricingInfo}) => pricingInfo.availableCoupon === false)
  }
  
  const getPriceAsArray = (infos) => {
    return infos.map(({pricingInfo}) => pricingInfo.price)
  }
  
  const getTotalPrice = (prices) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return prices.reduce(reducer)
  }
  
  const getDiscountedPrice = (price, coupon) => {
    
    if(coupon.type === 'rate'){
      price = price - price / coupon.discountRate
      return price
    }else if(coupon.type === 'amount'){
      price = price - coupon.discountAmount
      return price
    }
  }
  export const getPricingResult = (pricingInfos, coupon) => {
    
  //should separate pricingInfos whether availableCoupon or not :
  const couponTrue = couponAvailable(pricingInfos)
  const couponFalse = couponNotAvailable(pricingInfos)

  const lengthCouponTrue = couponTrue.length;
  const lengthCouponFalse = couponFalse.length;

  //get just price infos as new array:
  const pricesCouponTrue = getPriceAsArray(couponTrue);
  const pricesCouponFalse = getPriceAsArray(couponFalse);

  if(lengthCouponTrue === 0 && lengthCouponFalse === 0){
    return 0
  }else if(lengthCouponTrue > 0 && lengthCouponFalse > 0){
    //operate 2 cases
    let cashOnly = getTotalPrice(pricesCouponFalse)
    let discountOnly = getDiscountedPrice(getTotalPrice(pricesCouponTrue), coupon)
    let result = cashOnly + discountOnly
    return floor(result)

  }else if(lengthCouponTrue === 0 && lengthCouponFalse > 0){
    //only cash not discount
    let result = getTotalPrice(pricesCouponFalse)
    return result 
  }else if(lengthCouponTrue > 0 && lengthCouponFalse === 0){
    //operate only discount
    let total = getTotalPrice(pricesCouponTrue)
    let result = getDiscountedPrice(total, coupon)
    return floor(result) 
  }
  }
  
  
   
  
   
  
   
  
   
  
   
  
   
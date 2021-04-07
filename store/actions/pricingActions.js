export const addPricingInfo = (pricingInfo) => {
    return {
        type: 'ADD_PRICING_INFO',
        payload:{
            pricingInfo
        }
    }
}

export const removePricingInfo = (id) => {
    return {
        type: 'REMOVE_PRICING_INFO',
        payload:{
            id:id
        }
    }
}

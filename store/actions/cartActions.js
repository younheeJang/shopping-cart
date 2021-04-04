

export const plusCartItem = (counter) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload:{
            counter
        }
    }
}

export const minusCartItem = (counter) => {
    return {
        type: 'MINUS_CART_ITEM',
        payload: {
            counter
        }
    }
}


export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
        }
    }
};

export const removeFromCart = (id) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id: id
        }
    }
};

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
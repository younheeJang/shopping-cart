export const justAdd = (pricingInfos) => {
    const prices = pricingInfos.map(({pricingInfo}) => pricingInfo.price)
    const result = prices.reduce((accumulator, currentValue) => accumulator + currentValue)
    return result
}

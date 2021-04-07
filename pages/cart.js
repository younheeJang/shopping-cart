import Head from 'next/head'
import CartItems from '../ components/cart/CartItems'
import { useSelector  } from 'react-redux';
import Header from '../ components/utils/Header'
import Pricing from '../ components/pricing/Pricing'

export default function Cart() {
  const items = useSelector((state) => state.cartReducer.cart);
  //const pricingInfos = useSelector((state) => state.cartReducer.pricingInfos);
  //console.log(pricingInfos)
  return (
    <>
      <Head>
        <title>Curious Jeager</title>
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <Header />
      <CartItems Items={items}/>
      <Pricing />
    </>
    
   
   
  )
}

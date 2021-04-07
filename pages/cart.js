import Head from 'next/head'
import CartItems from '../ components/cart/CartItems'
import { useSelector  } from 'react-redux';
import Header from '../ components/utils/Header'
import Pricing from '../ components/pricing/Pricing'

export default function Cart() {
  const items = useSelector((state) => state.cartReducer.cart);
  const coupons = [
    {
      type: 'rate',
      title: '10% 할인 쿠폰',
      discountRate: 10,
    },
    {
      type: 'amount',
      title: '10,000원 할인 쿠폰',
      discountAmount: 10000,
    }
  ];
  return (
    <>
      <Head>
        <title>Curious Jeager</title>
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <Header />
      <CartItems Items={items}/>
      <Pricing Coupons={coupons}/>
    </>
    
   
   
  )
}

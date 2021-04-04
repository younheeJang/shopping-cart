import Head from 'next/head'
import CartItems from '../ components/cart/CartItems'
import { useSelector  } from 'react-redux';
import Header from '../ components/utils/Header'

export default function Cart() {
  const counter = useSelector((state) => state.cartReducer.counter);
  return (
    <>
      <Head>
        <title>Curious Jeager</title>
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <Header />
      <CartItems />
    </>
    
   
   
  )
}

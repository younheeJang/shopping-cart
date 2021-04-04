import Head from 'next/head'
import { useSelector } from 'react-redux';
import Header from '../ components/utils/Header'

export default function Home() {
  const counter = useSelector((state) => state.cartReducer.counter);
  return (
    <>
      <Head>
        <title>Curious Jeager</title>
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <Header />

    </>
    
   
   
  )
}

import Head from 'next/head'

export async function getStaticProps() {
  
    const items = await fetch('http://localhost:3001/api/shop/items').then((res) => res.json()).catch(err => console.log(err));
  
    return {
      props: { items },
    }
  }
  

export default function Shop({items}) {
  return (
    <>
      <Head>
        <title>Curious Jeager</title>
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <header className="'shadow-lg bg-white sticky top-0 h-50 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900 cursor-pointer" href="/">Home</a>
              <a className="mr-5 text-gray-900 cursor-pointer" href="/products">Shop</a>
              <a className="mr-5 hover:text-gray-900 cursor-pointer" href="/cart">Cart</a>
          </nav>
        </div>
      </header>
    </>
    
   
   
  )
}

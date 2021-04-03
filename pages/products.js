import Head from 'next/head'
import useSWR, { mutate } from 'swr'
import React,{ useState } from 'react'


const URL = `http://localhost:3001/api/shop/items`;


export default function Shop() {

  const [pageNumber, setPageNumber] = useState(1);
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data:items} = useSWR(pageNumber ? `${URL}/${pageNumber}`: null, fetcher)
  
  console.log(items)
    
    async function getPageData(event) {
        await setPageNumber(event.target.value);
        console.log(pageNumber)
        await mutate(`${URL}/${pageNumber}`, false)  
    }
    


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

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <button value="1" onClick={getPageData} className="focus:outline-none focus:bg-gray-400 focus:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              1
            </button>
          </li>
          <li>
            <button value="2" onClick={getPageData} className="focus:outline-none focus:bg-gray-400 focus:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              2
            </button>
          </li>
          <li>
            <button value="3" onClick={getPageData} className="focus:outline-none focus:bg-gray-400 focus:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              3
            </button>
          </li>
        </ul>
        </nav>
      </div>

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        {items &&  items.map(({ id, coverImage, title, price }) => (
        <section key={id} className="text-gray-600 body-font">
          <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={coverImage} />
          <div className="flex flex-col text-center w-full">
            <p className="text-xl font-medium title-font mb-4 text-gray-900">{title}</p>
            <div className="grid grid-cols-12 ">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base col-start-7 col-span-3">{price}</p>
            <img className="h-5 w-5 " alt="hero" src='/icons/shopping-add.png' />
            </div>
          </div>
          <div className="mb-10"></div>
        </section>
        
       ))}  
      
      </div>
    </>
    
   
   
  )
}

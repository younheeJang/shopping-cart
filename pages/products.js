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
        setPageNumber(event.target.value);
        mutate(`${URL}/${pageNumber}`, false)  
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
            <button value="1" onClick={getPageData} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              1
            </button>
          </li>
          <li>
            <button value="2" onClick={getPageData} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              2
            </button>
          </li>
          <li>
            <button value="3" onClick={getPageData} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
              3
            </button>
          </li>
        </ul>
        </nav>
      </div>

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
      </div>
    </>
    
   
   
  )
}

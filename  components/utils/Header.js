import Link from 'next/link'
import { useSelector } from 'react-redux';
const Header = () => {
    const counter = useSelector((state) => state.cartReducer.counter);
   
    return (
       <>
        <header className="'shadow-lg bg-white sticky top-0 h-50 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/"><a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a></Link>
              <Link href="/products"><a className="mr-5 text-gray-900 cursor-pointer">Shop</a></Link>
              <Link href="/cart"><a className="mr-5 hover:text-gray-900 cursor-pointer" >Cart[{counter}]</a></Link>
          </nav>
        </div>
        </header>
       </>
    )
}

export default Header;
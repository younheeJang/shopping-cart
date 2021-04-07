import PropTypes from 'prop-types';
import CheckBox from './CheckBox'


const CartItems = ({Items}) => {
 

    return (
       <>
       <div className="xl:mx-48 lg:mx-48 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       {Items&&  Items.map(({product:{id, coverImage, title, price, availableCoupon }}) => (
        <section key={id} className="grid justify-items-stretch text-gray-600 body-font">
          <div className="flex flex-col text-center w-full justify-self-center min-w-1/2">
          <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 mx-auto mb-10 rounded object-fill" alt="curious" src={coverImage} />
            <p className="text-xl font-medium title-font mb-4 text-gray-900">{title}</p>
            <div className="grid grid-cols-12 m-1 justify-items-center">
            <CheckBox Id={id} Price={price} AvailableCoupon={availableCoupon} />
            </div>
          </div>
          <div className="mb-10"></div>
        </section>
       ))}  
        <div className="mb-20"></div>
      
      </div>
       </> 
    )
}

CartItems.propTypes ={
  Items: PropTypes.array
}

export default CartItems;
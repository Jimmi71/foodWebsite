import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { RiAddBoxFill } from 'react-icons/ri';
import { AiFillMinusSquare } from 'react-icons/ai';
import { addCartItem, deleteCartData, minusCartItem } from '../features/CartSlice';
const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartValue)
  const cartQuantity = useSelector((state) => state.cart.quantity)
  const dispatch = useDispatch();

  useEffect(() => {
    return (
      localStorage.setItem("cartData", JSON.stringify(cartData)),
      localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity))
      )
  }, [cartData])

  return (
    <>
      <div>
        <div className='grid xl:grid-cols-4 items-center justify-center  sm:grid-cols-2 lg:grid-cols-3 gap-10 p-16'>
          {cartData.map((elem, ind) => {
            return (
              <div className='h-[250px] bg-red-500 rounded-lg w-[250px] shadow cursor-pointer mx-auto hover:scale-105 transition duration-300 ease-in-out' key={ind}>
                <div className='relative'>
                  <img className='h-[200px] w-[250px] rounded-t-lg object-cover object-center' src={elem.image} alt="/" />
                  <div className='h-[200px] w-[250px] bg-black/60 flex items-center justify-center rounded-t-lg text-center absolute top-0 p-2'>
                    <h1 className='text-blue-200 text-3xl font-bold'>{elem.title}</h1>
                  </div>
                  <div className='h-[200px] w-[250px] absolute top-0 right-0 p-3 text-transparent hover:text-blue-200'>
                    <MdDelete onClick={() => { dispatch(deleteCartData({ id: ind })) }} className='float-right text-2xl hover:text-white transition-colors' />
                  </div>
                  <div className='flex justify-between items-center text-2xl font-bold mt-2 mx-6 text-blue-200'>
                    <h1>{elem.price}$</h1>
                    <div className='flex items-center justify-center text-xl'>
                      <AiFillMinusSquare className='text-3xl mr-1 hover:text-black transition-colors' onClick={() => {dispatch(minusCartItem({id: ind}))}}/>
                      <h1>{elem.quantity}</h1>
                      <RiAddBoxFill className='text-3xl ml-1 hover:text-black transition-colors' onClick={() => {dispatch(addCartItem({id: ind}))}}/>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Cart
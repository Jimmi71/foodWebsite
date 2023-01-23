import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BsCartFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { deleteData } from '../features/CardSlice';
import { addToCart } from '../features/CartSlice';

const Cards = () => {
  const data = useSelector(state => state.card.value)
  const cartData = useSelector((state) => state.cart.cartValue)
  const cartQuantity = useSelector((state) => state.cart.quantity)
  const dispatch = useDispatch();

  useEffect(() => {
    return localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  useEffect(() => {
    return (
      localStorage.setItem("cartData", JSON.stringify(cartData)),
      localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity))
      )
  }, [cartData, cartQuantity])


  return (
    <>
      <div className='grid xl:grid-cols-4 items-center justify-center  sm:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
        {data.map((elem, ind) => {
          return (
            <div className='h-[250px] bg-red-500 rounded-lg w-[250px] shadow cursor-pointer mx-auto hover:scale-105 transition duration-300 ease-in-out' key={ind}>
              <div className='relative'>
                <img className='h-[200px] w-[250px] rounded-t-lg object-cover object-center' src={elem.image} alt="/" />
                <div className='h-[200px] w-[250px] bg-black/60 flex items-center justify-center rounded-t-lg text-center absolute top-0 p-2'>
                  <h1 className='text-blue-200 text-3xl font-bold'>{elem.title}</h1>
                </div>
                <div className='h-[200px] w-[250px] absolute top-0 right-0 p-3 text-transparent hover:text-blue-200'>
                  <MdDelete onClick={() => { dispatch(deleteData({ id: ind })) }} className='float-right text-2xl hover:text-white transition-colors' />
                </div>
                <div className='flex justify-between items-center text-2xl font-bold pt-2 px-6 text-blue-200'>
                  <h1>{elem.price}$</h1>
                    <BsCartFill className='hover:text-black transition-colors cursor-pointer' onClick={() => {
                      dispatch(addToCart({ cartData: elem, id: ind }))
                    }
                    } />
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Cards
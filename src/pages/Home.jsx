import React from 'react'
import img from "../images/bg.jpg"
import Cards from '../components/Cards'

const Home = () => {
  return (
    <>
      <div>
        <div className='md:text-[90px] relative sm:text-[70px] text-[50px] flex flex-col justify-center item-center  shadow-2xl w-full'>
          <img className='z-[1] h-[400px] object-cover object-center w-[100%]' src={img} alt="/" />
          <div className='bg-black/80 absolute top-0 h-[400px] w-[100%] z-10 items-center lg:items-end flex justify-center flex-col font-bold'>
            <h1 className='lg:pr-[220px]'><span className=' text-red-500 mr-[50px]'>THE</span><span className='text-blue-200'>Best</span></h1>
            <h1 className='lg:pr-[150px]'><span className=' text-blue-200 mr-[50px]'>FOOD</span><span className=' text-red-500'>Shop</span></h1>
          </div>
        </div>
        <div>
        <Cards />
        </div>
      </div>
    </>
  )
}

export default Home
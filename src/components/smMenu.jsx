import React from 'react'
import { RxCrossCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const SmMenu = (props) => {
    const cancelHolder = () => {
        props.onCancel();
    }
    return (
        <div>
                <ul onClick={cancelHolder} className='text-red-500 absolute text-[15px] top-0 bg-blue-100 left-0 w-[220px] duration-300 transition ease-in-out h-[100vh] z-20 px-4 font-bold'>
                <RxCrossCircled onClick={cancelHolder} size={25} className="absolute top-3 cursor-pointer right-3 hover:text-black text-red-500" />
                    <li className='p-1 hover:text-black cursor-pointer mx-6 my-10 mt-[30px]'><Link to="/">HOME</Link></li>
                    <li className='p-1 hover:text-black cursor-pointer mx-6 my-10'>ABOUT US</li>
                    <li className='p-1 hover:text-black cursor-pointer mx-6 my-10'>CONTACT US</li>
                </ul>
        </div>
    )
}

export default SmMenu
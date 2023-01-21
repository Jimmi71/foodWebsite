import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SmMenu from './smMenu';
import Overlay from './Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from "../features/CardSlice"
import { Link } from 'react-router-dom';
import { Badge, Tooltip } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: "60%",
    bgcolor: 'background.paper',
    border: '3px solid #eb4034',
    boxShadow: 24,
    p: 4,
    borderRadius: "7px",
};


const Navbar = () => {
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const cartQuantity = useSelector((state) => state.cart.quantity)

    const addFormData = (e) => {
        e.preventDefault()
        dispatch(addData({
            title,
            image,
            price
        }))
        setTitle("");
        setImage("");
        setPrice("");
        handleClose()

    }

    const clickHolder = () => {
        setShow(true);
    }

    const closeHolder = () => {
        setShow(false);
    }

    return (
        <>
            {show && <Overlay onCancel={closeHolder} />}
            <div className='flex justify-between items-center text-black bg-blue-200 h-[45px] fixed z-20 w-full'>
                <div className='flex justify-center items-center'>
                    {show && <SmMenu onCancel={closeHolder} />}
                    <AiOutlineMenu onClick={clickHolder} className='text-red-500 sm:hidden mx-2' size={20} />
                    <h2 className='lg:mx-5 md:mx-2 mx-1 my-2 font-extrabold lg:text-xl text-base cursor-pointer text-red-500'>FOODS</h2>
                </div>
                <div className='mx-5 my-2 sm:flex hidden'>
                    <ul className='flex lg:text-[15px] text-[12px] font-bold'>
                        <li className='lg:mx-12 mx-6 cursor-pointer hover:font-extrabold hover:text-red-500'><Link to="/">HOME</Link></li>
                        <li className='lg:mx-12 mx-6 cursor-pointer hover:font-extrabold hover:text-red-500'>ABOUT US</li>
                        <li className='lg:mx-12 mx-6 cursor-pointer hover:font-extrabold hover:text-red-500'>CONTACT US</li>
                    </ul>
                </div>
                <div className='flex my-2 font-bold lg:mx-5 md:mx-2'>
                    <Link to="/cart">
                        <Badge color="primary" badgeContent={cartQuantity} className="lg:mr-8 md:mr-4 mr-1" >
                            <BsCartFill className='cursor-pointer lg:text-2xl text-xl hover:text-red-500' />
                        </Badge>
                    </Link>
                    <button onClick={handleOpen} className='flex items-center cursor-pointer mx-3 lg:text-[12px] text-[10px] bg-red-500 text-blue-100 px-2 py-1 hover:bg-blue-100 hover:text-black hover:border-2 hover:border-black transition-colors duration-75'>ADD NEW PRODUCT <MdAddBox className='md:ml-2 ml-1 hover:font-extrabold lg:text-xl text-base' /></button>
                </div>
            </div>
            {<div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style} className="lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%]">
                            <RxCrossCircled onClick={handleClose} size={25} className="absolute top-3 cursor-pointer right-3 hover:text-red-500 text-black" />
                            <div>
                                <form className='flex flex-col justify-center items-center text-black' onSubmit={addFormData}>
                                    <div className='w-full flex space-x-3 items-center justify-center'>
                                        <div className='w-[50%]'>
                                            <label htmlFor="tile" className='md:text-xl sm:text-lg font-bold block'>Product Title:</label>
                                            <div className='relative'>
                                                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='e.g. Zinger-Burger' className='bg-blue-200 rounded p-2 mt-2 w-full outline-red-500' />
                                                <Tooltip className="absolute top-[18px] md:right-3 right-2" title="Input the Title of Your Product" arrow>
                                                    <button className='disabled hover:text-red-500 text-gray-600 text-xl'>
                                                        <HiInformationCircle />
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className='w-[50%]'>
                                            <label htmlFor="title" className='md:text-xl sm:text-lg font-bold block'>Product Price:</label>
                                            <div className='relative'>
                                                <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} id='title' placeholder='e.g. 10' className='bg-blue-200 rounded p-2 mt-2 w-full outline-red-500' />
                                                <Tooltip className="absolute top-[18px] md:right-3 right-2" title="Input the Price of Your Product" arrow>
                                                    <button className='disabled hover:text-red-500 text-gray-600 text-xl'>
                                                        <HiInformationCircle />
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full mt-6'>
                                        <label htmlFor="tile" className='md:text-xl sm:text-lg font-bold block'>Product Image:</label>
                                        <div className='relative'>
                                            <input required type="url" value={image} onChange={(e) => setImage(e.target.value)} id='title' placeholder='e.g. https://xyz.jpg' className='bg-blue-200 rounded p-2 mt-2 w-full outline-red-500' />
                                            <Tooltip className="absolute top-[18px] md:right-3 right-2" title="Input the Image Link of Your Product" arrow>
                                                <button className='disabled hover:text-red-500 text-gray-600 text-xl'>
                                                    <HiInformationCircle />
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <button className='font-bold mt-6 bg-black hover:bg-red-500 transition-colors text-white rounded shadow py-2 px-6'>Submit</button>
                                </form>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>}
        </>
    )
}

export default Navbar;
import React from 'react'

const Overlay = (props) => {
  return (
    <div onClick={props.onCancel} className='absolute top-0 left-0 bg-black/80 w-[100%] h-screen z-20'></div>
  )
}

export default Overlay;
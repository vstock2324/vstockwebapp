import React, { memo } from 'react'
import { FaChevronLeft } from "react-icons/fa";
const VectorModalPreviousBtn=()=>{
  return (
    <button  className='absolute p-2 cursor-pointer rounded-full bg-none hover:bg-white/15 top-1/2 -translate-y-1/2 -left-16'>
        <FaChevronLeft size={30} fill='#EEE'/>
    </button>
  )
}

export default  memo(VectorModalPreviousBtn);

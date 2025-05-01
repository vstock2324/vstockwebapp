import React, { memo } from 'react'
import { FaChevronRight } from "react-icons/fa";
const VectorModalNextBtn=()=>{
  return (
    <button  className='absolute p-2 cursor-pointer rounded-full bg-none hover:bg-white/15 top-1/2 -translate-y-1/2 -right-16'>
        <FaChevronRight size={30} fill='#EEE'/>
    </button>
  )
}

export default  memo(VectorModalNextBtn);
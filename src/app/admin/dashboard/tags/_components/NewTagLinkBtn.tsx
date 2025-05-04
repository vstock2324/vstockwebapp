import Link from 'next/link';
import React, { memo } from 'react'

const NewTagLinkBtn=()=> {
  return (
    <div className='flex flex-row  items-center justify-end my-2 px-2'>
        <Link  className='text-[#2E67DD] hover:text-[#2E67AA] text-[14px]  hover:underline' href={`/admin/dashboard/tags/new`}>Add New Tag</Link>
    </div>
  )
}

export default  memo(NewTagLinkBtn);




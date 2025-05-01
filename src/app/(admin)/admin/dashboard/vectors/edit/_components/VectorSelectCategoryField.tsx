import { Label } from 'flowbite-react';
import React, { memo } from 'react'
import SelectCategory from './SelectCategory';

const VectorSelectCategoryField=()=>{
  return (
          <div className='w-full'>
            <div className="my-2 block">
              <Label
                className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
                htmlFor="selectcategory"
              >
                Select Category
              </Label>
            </div>
            
      <SelectCategory/>
            
          </div>
  )
}

export default memo(VectorSelectCategoryField);
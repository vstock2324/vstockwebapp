import { Label } from 'flowbite-react';
import React, { memo } from 'react'
import SelectTag from './SelectTag';

const VectorSelectTagField=()=>{
  return (
          <div className='w-full"'>
            <div className="my-2 block">
              <Label
                className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
                htmlFor="selecttag"
              >
                Select Tag
              </Label>
            </div>
            
      <SelectTag/>
            
          </div>
  )
}

export default memo(VectorSelectTagField);
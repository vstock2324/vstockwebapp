import React, { memo } from 'react'
import VectorsMenu from './VectorsMenu';
import IllustrationsMenu from './IllustrationsMenu';
import VideosMenu from './VideosMenu';

const TemplatesMenu=()=> {
  return (
          <div className="flex flex-col items-start justify-start pr-4  h-[260px] w-[130px]">
  <VectorsMenu/>
  <VideosMenu/>
  <IllustrationsMenu/>
  <div className='h-[1px] w-[150px] -mx-5 bg-gray-300'/>
      </div>
  )
}

export default memo(TemplatesMenu);
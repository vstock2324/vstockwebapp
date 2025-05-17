import React, { memo } from 'react'
import Filter from './Filter';
import DownloadedTable from './DownloadedTable';

const FilterAndTable=()=> {
  return (
    <div className='block lg:flex lg:flex-row lg:mx-[120px] my-6 items-center justify-start'>
          <Filter/>
          <DownloadedTable/>
    </div>
  )
}

export default  memo(FilterAndTable);
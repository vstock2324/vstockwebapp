import React, { memo } from 'react'
import NewlyAddedImgOne from './NewlyAddedImgOne';
import NewlyAddedImgTwo from './NewlyAddedImgTwo';


const NewlyAddedGroupOne=()=> {
  return (
    <div className="flex flex-col  items-center justify-center space-y-8 md:flex-row  md:space-y-0 md:space-x-8 xl:hidden">
      <NewlyAddedImgOne/>
      <NewlyAddedImgTwo/>
      </div>
  )
}

export default memo(NewlyAddedGroupOne);
import React, { memo } from 'react'
import NewlyAddedImgThree from './NewlyAddedImgThree';
import NewlyAddedImgFour from './NewlyAddedImgFour';

const NewlyAddedGroupTwo=()=> {
  return (
       <div className="flex flex-col  items-center justify-center space-y-8 md:flex-row  md:space-y-0 md:space-x-8  xl:hidden" >
        <NewlyAddedImgThree/>
        <NewlyAddedImgFour/>
        </div>
  )
}

export default memo(NewlyAddedGroupTwo);
import React, { memo } from 'react'
import TagNameField from './TagNameField';
import TagDescriptionField from './TagDescriptionField';

const EditTagForm=()=>{
  return (
        <div className="mx-2 my-2 p-4  w-full flex-col  gap-4 border-2  rounded-md border-gray-400">
              <TagNameField/>
              <TagDescriptionField/>
        </div>
  )
}

export default  memo(EditTagForm);
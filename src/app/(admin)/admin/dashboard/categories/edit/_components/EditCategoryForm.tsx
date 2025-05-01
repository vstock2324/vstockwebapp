import React, { memo } from 'react'
import CategoryNameField from './CategoryNameField';
import CategoryDescriptionField from './CategoryDescriptionField';

const EditCategoryForm=()=> {
  return (
        <div className="mx-2 my-2 p-4  w-full flex-col  gap-4 border-2  rounded-md border-gray-400">
          <CategoryNameField/>
          <CategoryDescriptionField/>
        </div>
  )
}

export default memo(EditCategoryForm);
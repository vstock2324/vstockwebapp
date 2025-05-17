import React, { memo } from 'react'
import CategoryGroupOne from './CategoryGroupOne'
import CategoryGroupTwo from './CategoryGroupTwo'
import CategoryAnimationLink from './CategoryAnimationLink'
import CategoryVectorLink from './CategoryVectorLink'
import CategoryIllustrationsLink from './CategoryIllustrationsLink'
import CategoryEditorLink from './CategoryEditorLink'

const CategoryGroup=() =>{
  return (<>
      <div className="flex flex-col items-center justify-between space-y-8 xl:hidden">
      <CategoryGroupOne/>
      <CategoryGroupTwo/>
      </div>
      <div className='hidden xl:flex xl:flex-row xl:items-center xl:justify-between '>
             <CategoryVectorLink />
              <CategoryAnimationLink/>
              <CategoryIllustrationsLink/>
              <CategoryEditorLink/>
      </div>
      </>
  )
}

export default  memo(CategoryGroup);
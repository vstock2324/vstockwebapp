import React from 'react'
import CategoryGroupOne from './CategoryGroupOne'
import CategoryGroupTwo from './CategoryGroupTwo'

function CategoryGroup() {
  return (
      <div className='flex flex-col items-center justify-between space-y-12 xl:space-y-0 xl:space-x-6 xl:flex-row'>
      <CategoryGroupOne/>
      <CategoryGroupTwo/>
      </div>
  )
}

export default CategoryGroup
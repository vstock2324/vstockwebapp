import { TemplateMenuContextProvider } from '@/context/useTemplateMenu'
import React from 'react'
import TemplatesList from './TemplatesList'

const TemplatesListWrapper=()=> {
  return (
    <TemplateMenuContextProvider>
        <TemplatesList/>
    </TemplateMenuContextProvider>
  )
}

export default TemplatesListWrapper
import { TableCell } from 'flowbite-react';
import React, { memo } from 'react'

const CategoryDateCell=({createdAt}:{createdAt:string})=> {
    const date = new Date(createdAt);

// Format for readability (e.g., "April 25, 2025, 7:02 PM")
const formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}).format(date);
  return (
       <TableCell className="w-[70px] text-center p-1">
           {formattedDate}
        </TableCell>
  )
}

export default memo(CategoryDateCell);
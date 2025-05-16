import React, { memo } from 'react'
import AccountSection from './AccountSection';

const Account=()=> {
  return (
    <div className='py-[30px] px-[20px] font-primary'>
        <AccountSection/>
    </div>
  )
}

export default memo(Account);
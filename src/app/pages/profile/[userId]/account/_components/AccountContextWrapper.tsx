import { LoggedInAdminContextProvider } from '@/context/useLoggedInAdmin';
import { LoggedInUserContextProvider } from '@/context/useLoggedInUser';
import React, { memo } from 'react'
import Account from './Account';

const AccountContextWrapper=()=>{
  
      return (
        <LoggedInAdminContextProvider>
          <LoggedInUserContextProvider>
            <Account/>
          </LoggedInUserContextProvider>
        </LoggedInAdminContextProvider>
      );
  
}

export default  memo(AccountContextWrapper);
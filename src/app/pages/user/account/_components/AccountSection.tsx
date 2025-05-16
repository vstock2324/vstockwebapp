import { memo } from "react"
import ConnectedAccounts from "./ConnectedAccounts";
import Notifications from "./Notifications";
import DeleteBtn from "./DeleteBtn";

const AccountSection=()=>{
  return (<div className=" mx-0 lg:mx-[120px]">
         <ConnectedAccounts/>
         <Notifications/>
          <DeleteBtn/> 
  </div>)
}


export default memo(AccountSection);
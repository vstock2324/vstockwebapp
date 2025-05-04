import { memo } from "react";
import { CgSpinner } from "react-icons/cg";

const CardLoading=()=>{
  return (<CgSpinner className="animate-spin" size={20}/>)
}

export default memo(CardLoading);
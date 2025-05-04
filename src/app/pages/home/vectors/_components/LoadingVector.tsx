import { memo } from "react"
import { CgSpinner } from "react-icons/cg";

const LoadingVector=()=>{
   return (<CgSpinner className="animate-spin" size={50}/>);
}

export default memo(LoadingVector);
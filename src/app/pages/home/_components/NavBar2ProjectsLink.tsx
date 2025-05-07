import Link from "next/link";
import { memo } from "react"

const NavBar2ProjectsLink=()=>{
return(   <li>
    <Link href={"/pages/projects"}>My Projects</Link>
    

  </li>)
}


export default memo(NavBar2ProjectsLink);
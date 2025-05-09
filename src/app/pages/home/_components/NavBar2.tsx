import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import TemplatesListItem from "./TemplatesListItem";
import NavBarLoginButton2 from "./NavBarLoginButton2";
import NavBar2ProjectsLinkContextWrapper from "./NavBar2ProjectsLinkContextWrapper";


const NavBar2 = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <nav className="hidden lg:flex lg:flex-row lg:items-center max-w-[1200px] lg:justify-center lg:w-full">
        <ul className="list-none text-[20px] text-white flex flex-row justify-between items-center w-full ">
          <li className="flex flex-col items-start justify-start pb-2">
            <Link href={"/pages/home"}>
              {" "}
              <Image
                alt="logo"
                src={"/logo/vstocks2.png"}
                width={125}
                height={75}
              />
            </Link>
          </li>
          <li>
            <Link href={"/pages/home"}>Home</Link>
          </li>
          <TemplatesListItem />
          <NavBar2ProjectsLinkContextWrapper/>          
          <li>
            <Link href={"/pages/premium"}>Premium</Link>
          </li>
          <NavBarLoginButton2 />
        </ul>
      </nav>
    </div>
  );
};

export default memo(NavBar2);

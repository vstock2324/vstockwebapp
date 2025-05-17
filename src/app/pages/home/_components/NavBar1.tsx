import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import NavBarLoginButton1 from "./NavBarLoginButton1";

const NavBar1 = () => {
  return (
    <div className="sm:flex sm:flex-row items-center justify-center w-full hidden  xl:hidden">
      <nav className="flex flex-row items-center justify-center w-full">
        <ul className="list-none text-[20px] text-white flex flex-row justify-between items-center w-full ">
          <li className="flex flex-row items-start justify-between pb-2 gap-x-3">
            <IoReorderThree fill="white" className="cursor-pointer" size={45} />
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
          <NavBarLoginButton1 />
        </ul>
      </nav>

    </div>
  );
};

export default memo(NavBar1);

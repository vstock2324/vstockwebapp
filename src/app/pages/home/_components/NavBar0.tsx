import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import NavBarLoginButton0 from "./NavBarLoginButton0";

const NavBar0 = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:hidden">
      <nav className="flex flex-row items-center justify-center w-full">
        <ul className="list-none text-[20px] text-white flex flex-row justify-between items-center w-full ">
          <li className="flex flex-row items-start justify-between pb-2 gap-x-3">
            <IoReorderThree fill="white" className="cursor-pointer" size={30} />
            <Link href={"/pages/home"} prefetch>
              {" "}
              <Image
                alt="logo"
                src={"/logo/vstocks2.png"}
                width={90}
                height={54}
              />
            </Link>
          </li>
          <NavBarLoginButton0 />
        </ul>
      </nav>

    </div>
  );
};

export default memo(NavBar0);

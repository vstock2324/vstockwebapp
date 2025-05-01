import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";

const NavBar1 = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <nav className="lg:hidden flex flex-row items-center justify-center  min-w-[400px] w-full">
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
            <IoReorderThree className="cursor-pointer" size={36} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(NavBar1);

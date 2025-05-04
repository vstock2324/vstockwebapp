import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import TemplatesListItem from "../../../pages/home/_components/TemplatesListItem";

const NavBar2 = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <nav className="hidden lg:flex lg:flex-row lg:items-center max-w-[1200px] lg:justify-center lg:w-full">
        <ul className="list-none text-[20px] text-white flex flex-row justify-between items-center w-full ">
          <li className="flex flex-col items-start justify-start pb-2">
            <Link href={"/pages/home"}>
              {" "}
              <Image
              className=" object-fill"
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
          <li>
            <Link href={"/pages/projects"}>My Projects</Link>
          </li>
          <li>
            <Link href={"/pages/premium"}>Premium</Link>
          </li>
          <li>
            <Link
              className="border border-white dark:border-white rounded-[25px] px-6 py-1"
              href={"/pages/login"}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(NavBar2);

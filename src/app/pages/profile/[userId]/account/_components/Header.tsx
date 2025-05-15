import NavBar0 from "@/app/pages/home/_components/NavBar0";
import NavBar1 from "@/app/pages/home/_components/NavBar1";
import NavBar2 from "@/app/pages/home/_components/NavBar2";
import { memo } from "react";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] relative font-primary`}>
        <header className="mx-[10px] sm:mx-[50px] md:mx-[80px] pb-[20px]  lg:pb-[40px] pt-[30px] lg:mx-[120px] lg:pt-[60px]">
          <NavBar0 />
          <NavBar1 />
          <NavBar2 />
        </header>
      </div>
    </>
  );
};

export default memo(Header);
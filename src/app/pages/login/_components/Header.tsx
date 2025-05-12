import { memo } from "react";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar1";
import NavBar0 from "./NavBar0";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className="mx-[50px] pt-[30px] pb-[20px] lg:mx-[120px] lg:pt-[60px] lg:pb-[40px]">
          <NavBar0/>
          <NavBar1 />
          <NavBar2 />
        </header>
      </div>
    </>
  );
};

export default memo(Header);

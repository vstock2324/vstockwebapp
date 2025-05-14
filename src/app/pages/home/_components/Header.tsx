import { memo } from "react";
import NavBar2  from "./NavBar2";
import HomeSearchBar from "./HomeSearchBar";
import NavBar1 from "./NavBar1";
import NavBar0 from "./NavBar0";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] relative font-primary`}>
        <header className="mx-[10px] sm:mx-[50px] md:mx-[80px] pt-[30px] lg:mx-[120px] lg:pt-[60px]">
          <NavBar0/>
          <NavBar1/>
          <NavBar2/>
          <HomeSearchBar/>
        </header>
      </div>
    </>
  );
};

export default memo(Header);

import { memo } from "react";
import NavBar2  from "./NavBar2";
import HomeSearchBar from "./HomeSearchBar";
import NavBar1 from "./NavBar1";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] relative`}>
        <header className="mx-[50px] pt-[30px] lg:mx-[120px] lg:pt-[60px]">
          <NavBar1/>
          <NavBar2/>
          <HomeSearchBar/>
        </header>
      </div>
    </>
  );
};

export default memo(Header);

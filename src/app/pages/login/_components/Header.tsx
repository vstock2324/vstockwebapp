import { memo } from "react";
import NavBar0 from "../../home/_components/NavBar0";
import NavBar1 from "../../home/_components/NavBar1";
import NavBar2 from "../../home/_components/NavBar2";


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

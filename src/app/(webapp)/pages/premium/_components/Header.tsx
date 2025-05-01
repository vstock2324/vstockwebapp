import { memo } from "react";
import NavBar2  from "../../home/_components/NavBar2";
import NavBar1 from "../../home/_components/NavBar1";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className="mx-[50px] pt-[30px] pb-[20px] lg:mx-[120px] lg:pt-[60px] lg:pb-[40px]">
          <NavBar1/>
          <NavBar2/>
        </header>
      </div>
    </>
  );
};

export default memo(Header);

import Header from "./Header";
import Footer from "../../../../components/Footer"
import { memo } from "react";



const MainHomeLayout=({
  children,
}: {
  children: React.ReactNode;
})=> {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


export default memo(MainHomeLayout);
import { memo } from "react";
import HomeNestedHeader from "./HomeNestedHeader"
import Footer from  "../../../../../components/Footer";
const MainNestedLayout=({
  children,
}: {
  children: React.ReactNode;
})=> {
  return (
    <>
      <HomeNestedHeader/>
      {children}
      <Footer />
    </>
  );
}


export default memo(MainNestedLayout);
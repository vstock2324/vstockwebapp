
import Footer from "@/components/Footer"
import { memo } from "react";
import HomeNestedHeader from "./HomeNestedHeader";



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
"use client";
import { createContext, useContext , useState ,useLayoutEffect } from "react";

const VectorModalContext = createContext();

export const VectorModalContextProvider = ({ children }) => {
  const [openVectorModal, setOpenVectorModal] = useState(false);
  const [sizeVectorModal,setSizeVectorModal]= useState("6xl");
  const [selectedVector,setSelectedVector]=useState({});
  const [selectedVectorUrl,setSelectedVectorUrl]=useState();

  function handleVectorModalSize(){
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 640) setSizeVectorModal("md");
      else if (window.innerWidth > 640 && window.innerWidth <= 768)
        setSizeVectorModal("lg");
      else if (window.innerWidth > 768 && window.innerWidth <= 896)
        setSizeVectorModal("2xl");
      else if (window.innerWidth > 896 && window.innerWidth <= 1024)
        setSizeVectorModal("3xl");
      else if (window.innerWidth > 1024 && window.innerWidth <= 1152)
        setSizeVectorModal("4xl");
      else if (window.innerWidth > 1152 && window.innerWidth <= 1280)
        setSizeVectorModal("5xl");
      else if (window.innerWidth > 1280 && window.innerWidth <=1440 ) 
        setSizeVectorModal("6xl");
      else if (window.innerWidth > 1440 ) 
        setSizeVectorModal("7xl");
    }
  };

  useLayoutEffect(() => {
    if(typeof window !== "undefined"){
    window.addEventListener("resize", handleVectorModalSize, false);
    return () => {
      window.removeEventListener("resize", handleVectorModalSize, false);
    };
  }
  }, []);

  const exposed={selectedVectorUrl,setSelectedVectorUrl, openVectorModal, setOpenVectorModal,sizeVectorModal , selectedVector ,setSelectedVector }

  return (
    <VectorModalContext.Provider
      value={exposed}
    >
      {children}
    </VectorModalContext.Provider>
  );
};

export default function useVectorModal() {
  return useContext(VectorModalContext);
}

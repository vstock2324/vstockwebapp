"use client";
import { jwtDecode } from "jwt-decode";
import {createContext,useContext,useState,useEffect} from "react";
import supabase from "@/utils/supabase/supabaseBrowserClient";


const LoggedInAdminContext = createContext();
export const LoggedInAdminContextProvider = ({ children }) => {
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);
  async function getLoggedInAdmin() {
    const { data: { user } } = await supabase.auth.getUser();
     const {data:{session}}=await supabase.auth.getSession();
    if (user && session)  {
      const decodedToken = jwtDecode(session?.access_token);
      // console.log("Decoded Token",decodedToken);
      if (decodedToken.user_role === "admin") {
        setLoggedInAdmin(user);
      } else {
        setLoggedInAdmin(null);
      }
    } else {
      setLoggedInAdmin(null);
    }
  }
  useEffect(() => {
    getLoggedInAdmin();
  },[]);

  return (
    <LoggedInAdminContext.Provider value={{ loggedInAdmin, setLoggedInAdmin }}>
      {children}
    </LoggedInAdminContext.Provider>
  );
};

export default function useLoggedInAdmin() {
  return useContext(LoggedInAdminContext);
}
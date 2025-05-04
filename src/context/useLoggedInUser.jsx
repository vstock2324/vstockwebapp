"use client";
import { createContext, useContext, useState, useEffect } from "react";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { jwtDecode } from "jwt-decode";

const LoggedInUserContext = createContext();

export const LoggedInUserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  async function getLoggedInUser() {
    const { data: { user } } = await supabase.auth.getUser();
    const {data: {session}}=await supabase.auth.getSession();
    if (user && session)  {
      const decodedToken = jwtDecode(session?.access_token);
      // console.log("Decoded Token",decodedToken);
      if (decodedToken.user_role !== "admin") {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(null);
      }
    } else {
      setLoggedInUser(null);
    }
  }
  useEffect(() => {
    getLoggedInUser();
  },[]);
  

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};

export default function useLoggedInUser() {
  return useContext(LoggedInUserContext);
}

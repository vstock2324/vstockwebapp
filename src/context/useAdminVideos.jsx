"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const AdminVideosContext = createContext();

export const  AdminVideosContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [numVideosPages, setNumVideosPages] = useState(1);
  const supabase = createClient();
  const newlimit = 10;
  async function getTotalVideosPages() {
    const { data, error } = await supabase.from("video_details").select("*");
    if (error) throw new Error(error.message);
    setNumVideosPages(Math.ceil(data.length / newlimit));
  }
  async function getVideos() {
    const { data, error } = await supabase
      .from("video_details")
      .select("*")
      .range(0, newlimit - 1);
    if (error) throw new Error(error.message);
    setVideos(data);
  }

  useEffect(() => {
    getTotalVideosPages();
    getVideos();
  }, []);
  return (
    <AdminVideosContext.Provider
      value={{
        videos,
        setVideos,
        getVideos,
        numVideosPages,
        setNumVideosPages,
        newlimit,
      }}
    >
      {children}
    </AdminVideosContext.Provider>
  );
};

export default function useAdminVideos() {
  return useContext(AdminVideosContext);
}

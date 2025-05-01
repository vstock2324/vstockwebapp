"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const TagsContext = createContext();

export const  TagsContextProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [numTagsPages, setNumTagsPages] = useState(1);
  const supabase = createClient();
  const newlimit = 10;
  async function getTotalTagsPages() {
    const { data, error } = await supabase.from("tags").select("*");
    if (error) throw new Error(error.message);
    setNumTagsPages(Math.ceil(data.length / newlimit));
  }
  async function getTags() {
    const { data, error } = await supabase
      .from("tags")
      .select("*")
      .range(0, newlimit - 1);
    if (error) throw new Error(error.message);
    setTags(data);
  }

  useEffect(() => {
    getTotalTagsPages();
    getTags();
  }, []);
  return (
    <TagsContext.Provider
      value={{
        tags,
        setTags,
        getTags,
        numTagsPages,
        setNumTagsPages,
        newlimit,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default function useTags() {
  return useContext(TagsContext);
}

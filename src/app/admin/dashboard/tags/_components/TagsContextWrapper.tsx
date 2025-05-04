import React from 'react';
import { TagsContextProvider } from "@/context/useAdminTags";
import TagsTable from "./TagsTable";

function TagsContextWrapper() {
  return (
    <TagsContextProvider><TagsTable/></TagsContextProvider>
  )
}

export default TagsContextWrapper
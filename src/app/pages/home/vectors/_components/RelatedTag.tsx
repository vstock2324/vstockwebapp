"use client";
import {  memo, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import useVectorModal from "@/context/useVectorModal";
import TagButton from "./TagButton";

const RelatedTag = () => {
  const { selectedVector } = useVectorModal();
  const [tags, setTags] = useState<unknown[]>([]);
  async function getRelatedTags() {
    try{
    const supabase = createClient();
    const { data: tagsData, error: tagsError } = await supabase
      .from("vector_tags_view")
      .select("*")
      .eq(`vector_id`, `${selectedVector.vector_id}`);
    if (tagsError) throw new Error(tagsError.message);
    setTags(tagsData);
  }
  catch(error){
    console.log(error);
    throw error;
  }
  }

  useEffect(() => {
    getRelatedTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVector]);

  return (
    <>
      <div className=" m-0.5 flex flex-col">
        <div className=" m-0.5 ">
          <h6 className="text-[14px] m-0.5  font-semibold ">Related Tags</h6>
          <div className="flex flex-row items-center justify-start space-x-4 ">
            {tags &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              tags.map((item: any) => {
                return <TagButton key={item.tag_id} tag={item.tag_name} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(RelatedTag);

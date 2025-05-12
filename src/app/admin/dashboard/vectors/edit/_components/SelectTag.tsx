"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { nanoid } from "nanoid";
import { useParams, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const SelectTag = () => {
  const params = useParams<{ id: string }>();
  const [tags, setTags] = useState<unknown[]>([]);
  const [vectorTags, setVectorTags] = useState<unknown[]>([]);
  const router=useRouter();

  async function handleTagUpdate(e:React.ChangeEvent<HTMLSelectElement>){
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data, error } = await supabase
.from('vector_tags')
.insert([
  { vector_id: params.id, tag_id: `${e.target.value}`  },
])
.select()
 if(error) throw new Error(error.message);
 router.refresh();
  }
  async function handleTagDelete(vectorId: string, tagId: string) {
    const { error } = await supabase
      .from("vector_tags")
      .delete()
      .eq("vector_id", vectorId)
      .eq("tag_id", tagId);
    if (error) throw new Error(error.message);
    router.refresh();
  }

  async function getSelectedTags() {
    const { data: vectorTagsData, error: vectorTagsError } =
      await supabase
        .from("vector_tags_view")
        .select("tag_id,tag_name")
        .eq("vector_id", params.id);
    if (vectorTagsError) throw new Error(vectorTagsError.message);
    setVectorTags(vectorTagsData);

    const { data: tagsData, error: tagsError } = await supabase
      .from("tags")
      .select("id,name");
    if (tagsError) throw new Error(tagsError.message);
    setTags(
      tagsData.filter(
        (item1) =>
          !vectorTagsData.some((item2) => item2.tag_id === item1.id)
      )
    );
  }
  useEffect(() => {
    getSelectedTags();
  }, []);
  return (
    <div className="flex flex-row justify-between items-center space-x-4 w-full">
      <select onChange={handleTagUpdate} defaultValue={""} className="w-[30%] border focus:outline-blue-700 p-2 cursor-pointer  rounded-md">
        <option value={""} disabled hidden>
          Choose an option
        </option>
        {tags &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          tags.map((item: any) => {
            return (
              <option value={item.id} key={nanoid().toString()}>
                {item.name}
              </option>
            );
          })}
      </select>

      <ul className="flex flex-row flex-wrap items-center justify-start w-[65%] gap-2">
        {vectorTags &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          vectorTags.map((item: any) => {
            return (
              <li
                key={nanoid().toString()}
                className="flex flex-row  space-x-1 items-center justify-between px-2.5 py-1.5 bg-[#2E67DD] rounded-full border-none"
              >
                <span className="text-[14px] text-white">{item.tag_name}</span>
                <MdClose
                  className="cursor-pointer"
                  color="white"
                  onClick={() =>
                    handleTagDelete(params.id, item.tag_id)
                  }
                  size={18}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default memo(SelectTag);

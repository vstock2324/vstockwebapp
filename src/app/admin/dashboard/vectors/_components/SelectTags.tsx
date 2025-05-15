"use client";
import { memo, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { nanoid } from "nanoid";

const SelectTags = () => {
  const [tags, setTags] = useState<unknown[]>([]);

  async function handleSelectTags() {
    const supabase = createClient();
    const { data, error } = await supabase.from("tags").select("*");
    if (error) throw new Error("Tags can't be fetched");
    setTags(data);
  }

  useEffect(() => {
    handleSelectTags();
  }, []);

  return (
    <>
      <select required name="vectortags" className="w-[300px] h-[200px] rounded-md px-2 py-1 border border-gray-800" multiple>
        {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tags.map((item:any) => {
          return (
            <option key={nanoid().toString()} value={`${item.id}`}>
              {item.name}
            </option>
          );
        })
        }
      </select>
    </>
  );
};

export default memo(SelectTags);

"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { Label, Textarea } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { BiPencil, BiSave } from "react-icons/bi";

const CategoryDescriptionField = () => {
  const despRef = useRef<HTMLTextAreaElement>(null);
  const params = useParams<{ id: string }>();
  const [description, setDescription] = useState<string>("");

  async function getCategoryDescription() {
    const { data, error } = await supabase
      .from("category")
      .select("description")
      .eq("id", params.id);
    if (error) throw new Error(error.message);
    setDescription(data[0].description);
  }

  async function handleEditBtn() {
    if (despRef.current) {
      despRef.current.disabled = false;
    }
  }

  async function handleSaveBtn() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("category")
      .update({ description: description })
      .eq("id", params.id)
      .select();
    if (error) throw new Error(error.message);
    if (despRef.current) {
      despRef.current.disabled = true;
    }
  }

  useEffect(() => {
    getCategoryDescription();
  }, []);
  return (
    <div>
      <div className="my-2 block">
        <Label
          className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="categorydescription"
        >
          Category Description
        </Label>
      </div>
      <div className="flex flex-row items-center justify-between">
        <Textarea
          className="w-[90%] h-[150px]  resize-none "
          disabled
          ref={despRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="categorydescription"
          name="categorydescription"
          placeholder="Enter Category Description"
          required
        />
        <BiPencil className="cursor-pointer" onClick={handleEditBtn} size={24}/>
        <BiSave className="cursor-pointer" onClick={handleSaveBtn} size={24} />
      </div>
    </div>
  );
};

export default memo(CategoryDescriptionField);

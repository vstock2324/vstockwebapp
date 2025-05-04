"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { Label, TextInput } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { memo, useRef, useState,  useEffect } from "react";
import { BiPencil, BiSave } from "react-icons/bi";

const CategoryNameField = () => {
  const params = useParams<{ id: string }>();
  const [name, setName] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);

  async function getCatgeoryName() {
    const { data, error } = await supabase
      .from("category")
      .select("name")
      .eq("id", params.id);
    if (error) throw new Error(error.message);
    setName(data[0].name);
  }
  async function handleEditBtn() {
    if (nameRef.current) {
      nameRef.current.disabled = false;
    }
  }
  async function handleSaveBtn() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("category")
      .update({ name: name })
      .eq("id", params.id)
      .select();
    if (error) throw new Error(error.message);
    if (nameRef.current) {
      nameRef.current.disabled = true;
    }
  }
  useEffect(() => {
    getCatgeoryName();
  }, []);
  return (
    <div>
      <div className="my-2 block">
        <Label
          className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="categoryname"
        >
          Category Name
        </Label>
      </div>
      <div className="flex flex-row items-center justify-between">
        <TextInput
          ref={nameRef}
          className="w-[90%]"
          disabled
          id="categoryname"
          name="categoryname"
          type="text"
          placeholder="Enter Category Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BiPencil className="cursor-pointer" onClick={handleEditBtn} size={24}/>
        <BiSave className="cursor-pointer" onClick={handleSaveBtn} size={24} />
      </div>
    </div>
  );
};

export default memo(CategoryNameField);

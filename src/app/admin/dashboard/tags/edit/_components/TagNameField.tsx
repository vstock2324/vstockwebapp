"use client";
import supabase from '@/utils/supabase/supabaseBrowserClient';
import { Label, TextInput } from 'flowbite-react';
import { useParams } from 'next/navigation';
import React, { memo, useEffect, useRef, useState } from 'react'
import { BiPencil, BiSave } from 'react-icons/bi';

const TagNameField=()=>{
    const nameRef = useRef<HTMLInputElement>(null);
    const params = useParams<{ id: string }>();
    const [name, setName] = useState<string>("");
    async function getTagName() {
      const { data, error } = await supabase
        .from("tags")
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
        .from("tags")
        .update({ name: name })
        .eq("id", params.id)
        .select();
      if (error) throw new Error(error.message);
      if (nameRef.current) {
        nameRef.current.disabled = true;
      }
    }
    useEffect(() => {
      getTagName();
    }, []);
    return (
      <div>
        <div className="my-2 block">
          <Label
            className="after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
            htmlFor="tagname"
          >
            Tag Name
          </Label>
        </div>
        <div className="flex flex-row items-center justify-between">
          <TextInput
            ref={nameRef}
            className="w-[90%]"
            disabled
            id="tagname"
            name="tagname"
            type="text"
            placeholder="Enter Tag Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BiPencil
            className="cursor-pointer"
            onClick={handleEditBtn}
            size={24}
          />
          <BiSave className="cursor-pointer" onClick={handleSaveBtn} size={24} />
        </div>
      </div>
    );
}

export default  memo(TagNameField);
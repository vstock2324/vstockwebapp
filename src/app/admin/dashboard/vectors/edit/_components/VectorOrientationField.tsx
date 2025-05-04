"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { Label, Radio } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const VectorOrientationField = () => {
  const params = useParams<{ id: string }>();
  const [selectedOrientation, setSelectedOrientation] = useState<string>("");

  const handleOrientationChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("vector_details")
      .update({ orientation: e.target.value.toString() })
      .eq("vector_id", params.id)
      .select();
    if (error) throw new Error(error.message);
    setSelectedOrientation(e.target.value);
  };

  async function getVectorOrientation() {
    const { data, error } = await supabase
      .from("vector_details")
      .select("orientation")
      .eq("vector_id", params.id);
    if (error) throw new Error(error.message);
    setSelectedOrientation(data[0].orientation);
  }

  useEffect(() => {
    getVectorOrientation();
  }, []);
  return (
    <div>
      <div className="my-2 block">
        <Label
          className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="selectorientation"
        >
          Change Orientation
        </Label>
      </div>

      <div className="flex flex-row  items-center justify-start space-x-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <Radio
            className="cursor-pointer"
            name="horizontal"
            value="horizontal"
            checked={selectedOrientation === "horizontal"}
            onChange={handleOrientationChange}
          />
          <Label htmlFor="horizontal">Horizontal</Label>
        </div>
        <div className="flex  flex-row  justify-center items-center gap-2">
          <Radio
            className="cursor-pointer"
            name="vertical"
            value="vertical"
            checked={selectedOrientation === "vertical"}
            onChange={handleOrientationChange}
          />
          <Label htmlFor="vertical">Vertical</Label>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Radio
            className="cursor-pointer"
            name="square"
            value="square"
            checked={selectedOrientation === "square"}
            onChange={handleOrientationChange}
          />
          <Label htmlFor="square">Square</Label>
        </div>
      </div>
    </div>
  );
};

export default memo(VectorOrientationField);

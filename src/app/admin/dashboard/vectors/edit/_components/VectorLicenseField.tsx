"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { Label, Radio } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const VectorLicenseField = () => {
  const params = useParams<{ id: string }>();
  const [selectedLicense, setSelectedLicense] = useState<string>("");

  const handleLicenseChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("vector_details")
      .update({ license: e.target.value.toString() })
      .eq("vector_id", params.id)
      .select();
    if (error) throw new Error(error.message);
    setSelectedLicense(e.target.value);
  };

  async function getVectorLicense() {
    const { data, error } = await supabase
      .from("vector_details")
      .select("license")
      .eq("vector_id", params.id);
    if (error) throw new Error(error.message);
    setSelectedLicense(data[0].license);
  }

  useEffect(() => {
    getVectorLicense();
  }, []);
  return (
    <div>
      <div className="my-2 block">
        <Label
          className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400"
          htmlFor="selectorientation"
        >
          Change License
        </Label>
      </div>

      <div className="flex flex-row  items-center justify-start space-x-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <Radio
            className="cursor-pointer"
            name="free"
            value="free"
            checked={selectedLicense === "free"}
            onChange={handleLicenseChange}
          />
          <Label htmlFor="free">Free</Label>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Radio
            className="cursor-pointer"
            name="premium"
            value="premium"
            checked={selectedLicense === "premium"}
            onChange={handleLicenseChange}
          />
          <Label htmlFor="premium">Premium</Label>
        </div>
      </div>
    </div>
  );
};

export default memo(VectorLicenseField);

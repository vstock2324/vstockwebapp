"use client";

import useVectorModal from "@/context/useVectorModal";
import { createClient } from "@/utils/supabase/client";
import React, { memo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const VectorSVGDownloadLink = () => {
  const { selectedVector } = useVectorModal();
  const [loading,setLoading]=useState<boolean>(false);
  async function handleSVGDownload() {
   
   try {
        setLoading(true);
        const supabase = createClient();
      const { data, error } = await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .download(selectedVector?.svg_path);
      if (error) throw new Error(error.message);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `${selectedVector?.svg_path.split("/")[2]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
        setLoading(false);
    }
  }

  return (
    <>
      <button
        className={`bg-[#0BAC6F]  ${loading ? "cursor-progress":"cursor-pointer"} flex flex-row items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white disabled:text-white/30`}
        onClick={handleSVGDownload}
        disabled={loading}
      >
        SVG&nbsp;
        <FaArrowDownLong size={15} color="#FFFFFF" />
      </button>{" "}
    </>
  );
};

export default memo(VectorSVGDownloadLink);

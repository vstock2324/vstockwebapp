"use client";

import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import useVectorModal from "@/context/useVectorModal";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { memo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import VectorSVGDownloadLinkLoginAlert from "./VectorSVGDownloadLinkLoginAlert";

const VectorSVGDownloadLink = () => {
  const router = useRouter();
  const { selectedVector } = useVectorModal();
  const [loading, setLoading] = useState<boolean>(false);
  const { loggedInUser } = useLoggedInUser();
  const { loggedInAdmin } = useLoggedInAdmin();
  async function handleSVGDownload() {
    if (!loggedInUser && !loggedInAdmin) router.push("/pages/login");
    else if (
      (!loggedInUser && loggedInAdmin) ||
      (loggedInUser && !loggedInAdmin)
    ) {
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
  }

  return (
    <>
    {
      ((loggedInUser && !loggedInAdmin) || (!loggedInUser && loggedInAdmin) ) ? (   <button
        className={`bg-[#0BAC6F]  ${
          loading ? "cursor-progress" : "cursor-pointer"
        } flex-nowrap text-nowrap flex flex-row items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white disabled:text-white/30`}
        onClick={handleSVGDownload}
        disabled={loading}
      >
        SVG&nbsp;
        <FaArrowDownLong size={13} color="#FFFFFF" />
      </button>):(<VectorSVGDownloadLinkLoginAlert/>)
    }
   
    </>
  );
};

export default memo(VectorSVGDownloadLink);

"use client";

import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import useVectorModal from "@/context/useVectorModal";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { memo, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const VectorAIDownloadLink = () => {
  const { selectedVector } = useVectorModal();
  const router=useRouter();
  const [loading, setLoading] = useState<boolean>(false);
    const { loggedInUser } = useLoggedInUser();
    const { loggedInAdmin } = useLoggedInAdmin();
  async function handleAIDownload() {
    if (!loggedInUser && !loggedInAdmin) router.push("/pages/login");
    else if ((!loggedInUser && loggedInAdmin)||( loggedInUser && !loggedInAdmin)){
    try {
      setLoading(true);
      const supabase = createClient();
      const { data, error } = await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .download(selectedVector?.ai_path);
      if (error) throw new Error(error.message);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `${selectedVector?.ai_path.split("/")[2]}`;
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
      <button
        className={`bg-[#0BAC6F]  ${
          loading ? "cursor-progress" : "cursor-pointer"
        } flex flex-row items-center flex-nowrap text-nowrap justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white`}
        onClick={handleAIDownload}
        disabled={loading}
      >
        AI&nbsp;
        <FaArrowDownLong size={13} color="#FFFFFF" />
      </button>{" "}
    </>
  );
};

export default memo(VectorAIDownloadLink);

"use client";
import { createClient } from "@/utils/supabase/client";
import { TableCell } from "flowbite-react";
import React, { memo } from "react";

const VectorURLImg = ({ vectorPath }: { vectorPath: string }) => {
  async function handleVectorDownload() {
    const supabase = createClient();
    try {
      const { data, error } = await supabase.storage
        .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME!}`)
        .download(vectorPath);
      if (error) throw new Error(error.message);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `${vectorPath.split("/")[2]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
    }
  }
  return (
    <TableCell className="w-[160px] text-center p-1 font-medium text-gray-900 dark:text-white">
      <img
        alt=""
        onClick={handleVectorDownload}
        className="aspect-auto rounded-md cursor-pointer"
        src={`${process.env.NEXT_PUBLIC_SUPABASE_VECTOR_PATH}/${vectorPath}`}
      />
    </TableCell>
  );
};

export default memo(VectorURLImg);

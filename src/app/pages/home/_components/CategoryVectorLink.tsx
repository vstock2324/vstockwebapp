/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React, { memo } from "react";
// import Image from "next/image";

const CategoryVectorLink = async () => {
  const supabase = await createClient();
  const { data: vectorName, error } = await supabase.rpc(
    "select_random_jpeg_path"
  );
  if (error) {
    console.error("Error fetching random JPEG path:", error);
    throw new Error(error.message);
  }
  const {
    data: { publicUrl },
  } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(`${vectorName}`);
    

  return (
    <Link href={`/pages/home/vectors?page=1`} prefetch={true}>
      <div className="cursor-pointer flex flex-col items-center justify-between space-y-[10px] md:space-y-[30px]">
        <img
          className="w-[250px] h-[142px] object-fill  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[15px] border border-solid border-[#FFF]"
          src={publicUrl || "../../images/ne1.svg"}
          alt="Vector Graphics"
        />
        <h3 className="text-center hover:font-bold hover:transition-all hover:ease-in-out font-normal font-poppins text-[#1E1E1E]   leading-normal text-[clamp(14px,14px_+_1.2vw,22px)]">
          Vector Graphics
        </h3>
      </div>
    </Link>
  );
};

export default memo(CategoryVectorLink);

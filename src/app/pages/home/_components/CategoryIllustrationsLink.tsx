/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React, { memo } from "react";
// import Image from "next/image";

const CategoryIllustrationsLink = async () => {
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
    <Link href={`/pages/home`} prefetch={true}>
      <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
        <img
          // width={250}
          // height={142}
          className="w-[250px] h-[142px] object-fill bg-cover bg-[#D9D9D9] opacity-30  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
          // src="../../images/ne1.svg"
          src={publicUrl || "../../images/ne1.svg"}
          alt="Illustrations"
        />
        <h3 className="text-center hover:font-bold hover:transition-all hover:ease-in-out font-normal font-poppins text-[#1E1E1E]   leading-normal text-[clamp(14px,14px_+_1.2vw,22px)]">
          Illustrations
        </h3>
      </div>
    </Link>
  );
};

export default memo(CategoryIllustrationsLink);

/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image";

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
    console.log(publicUrl);

  return (
    <Link href={`/pages/home`} prefetch={true}>
      <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
        <Image
          width={250}
          height={142}
          className="max-w-[250px] max-h-[142px] bg-cover bg-[#D9D9D9] opacity-15  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
          // src="../../images/ne1.svg"
          src={publicUrl || "../../images/ne1.svg"}
          alt="Vector Graphics"
        />
        <h3 className="text-center font-normal font-poppins400 text-[#1E1E1E]   leading-normal text-[16px] md:text-[20px]">
          Illustrations
        </h3>
      </div>
    </Link>
  );
};

export default memo(CategoryIllustrationsLink);

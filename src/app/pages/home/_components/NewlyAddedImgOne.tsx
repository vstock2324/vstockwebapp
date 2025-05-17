import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image";

const NewlyAddedImgOne = () => {
  return (
    <Link className="cursor-pointer" href={"/"}>
      <Image
        width={264}
        height={187.217}
        className="rounded-[10px] bg-cover bg-no-repeat  bg-[#D9D9D9]"
        src="/images/Newly1.svg"
        alt=""
      />
    </Link>
  );
};

export default memo(NewlyAddedImgOne);

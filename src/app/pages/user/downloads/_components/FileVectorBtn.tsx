"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { memo, useEffect, useRef, useState } from 'react'
import { LiaVectorSquareSolid } from 'react-icons/lia';

const FileVectorBtn = () => {
  const [hover, setHover] = useState(false);
  const verticalRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const handleFileTypeVectors = () => {
    if (sp.get("type") === "vectors") {
      sp.delete("type");
    } else {
      sp.set("type", "vectors");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    const currentRef = verticalRef.current;
    if (!currentRef) return;
    currentRef.addEventListener("mouseenter", handleMouseEnter, {
      capture: false,
    });
    currentRef.addEventListener("mouseleave", handleMouseLeave, {
      capture: false,
    });

    return () => {
      currentRef.removeEventListener("mouseenter", handleMouseEnter, {
        capture: false,
      });
      currentRef.removeEventListener("mouseleave", handleMouseLeave, {
        capture: false,
      });
    };
  }, []);
  return (
    <button
      ref={verticalRef}
      onClick={handleFileTypeVectors}
      className={`${
        String(searchParams.get("type")) === "vectors"
          ? "bg-[#2E67DD] text-white border-none"
          : "bg-white text-black"
      } flex cursor-pointer  items-center hover:border-none hover:bg-[#2E67DD] px-2 py-0.5 border-black border w-fit rounded-lg`}
    >


      <LiaVectorSquareSolid
        color={`${
          String(searchParams.get("type")) === "vectors" || hover
            ? "white"
            : "black"
        }`}
        size={18}
      />        &nbsp;    <h4
        className={`${String(
          searchParams.get("type") === "vectors" || hover
            ? "text-white"
            : "text-black"
        )} text-base hover:text-white hover:border-white font-primary `}
      >
        Vectors
      </h4>
    </button>
  );
};

export default memo(FileVectorBtn);
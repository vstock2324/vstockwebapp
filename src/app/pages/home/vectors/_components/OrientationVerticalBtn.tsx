import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { LuRectangleVertical } from "react-icons/lu";

const OrientationVerticalBtn = () => {
  const [hover, setHover] = useState(false);
  const verticalRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const handleOrientationVertical = () => {
    if (sp.get("orientation") === "vertical") {
      sp.delete("orientation");
    } else {
      sp.set("orientation", "vertical");
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
      onClick={handleOrientationVertical}
      className={`${
        String(searchParams.get("orientation")) === "vertical"
          ? "bg-[#2E67DD] text-white border-none"
          : "bg-white text-black"
      } flex cursor-pointer  items-center hover:border-none hover:bg-[#2E67DD] p-1 border-black border w-fit rounded-lg`}
    >
      <h4
        className={`${String(
          searchParams.get("orientation") === "vertical" || hover
            ? "text-white"
            : "text-black"
        )} text-base hover:text-white hover:border-white font-primary `}
      >
        Vertical
      </h4>
      &nbsp;
      <LuRectangleVertical
        color={`${
          String(searchParams.get("orientation")) === "vertical" || hover
            ? "white"
            : "black"
        }`}
        size={18}
      />
    </button>
  );
};

export default memo(OrientationVerticalBtn);

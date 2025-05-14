import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { memo, useEffect, useRef, useState } from 'react'
import { LuRectangleHorizontal } from 'react-icons/lu';

const OrientationHorizontalBtn=()=> {
    const [hover, setHover] = useState(false);
    const horizontalRef = useRef<HTMLButtonElement>(null);
      const router = useRouter();
      const pathname = usePathname();
      const searchParams = useSearchParams();
      const sp = new URLSearchParams(searchParams);

      const handleOrientationHorizontal = () => {
        if (sp.get("orientation") === "horizontal") {
          sp.delete("orientation");
        } else {
          sp.set("orientation", "horizontal");
        }
        sp.set("page", "1");
        router.push(`${pathname}?${sp.toString()}`,{scroll:false});
      };

        const handleMouseEnter = () => {
              setHover(true);
            };
            const handleMouseLeave = () => {
              setHover(false);
            };
              useEffect(() => {
                const currentRef = horizontalRef.current;
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
      ref={horizontalRef}
              onClick={handleOrientationHorizontal}
              className={`${
                String(searchParams.get("orientation")) === "horizontal"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } flex cursor-pointer hover:text-white hover:border-none hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
            >
                    <h4
        className={`${String(
          searchParams.get("orientation") === "horizontal" || hover
            ? "text-white"
            : "text-black"
        )} text-base font-primary hover:text-white hover:border-white `}
      >
        Horizontal
      </h4>&nbsp;
              <LuRectangleHorizontal        color={`${
          String(searchParams.get("orientation")) === "horizontal" || hover
            ? "white"
            : "black"
        }`} size={18} />
            </button>
  )
}

export default memo(OrientationHorizontalBtn);
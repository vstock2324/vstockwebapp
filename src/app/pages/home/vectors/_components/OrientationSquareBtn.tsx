import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { memo, useEffect, useRef, useState } from 'react'
import { LuSquare } from 'react-icons/lu';

const OrientationSquareBtn=()=> {
      const router = useRouter();
      const [hover, setHover] = useState<boolean>(false);
      const squareRef = useRef<HTMLButtonElement>(null);
      const pathname = usePathname();
      const searchParams = useSearchParams();
      const sp = new URLSearchParams(searchParams);
      const handleOrientationSquare = () => {
        if (sp.get("orientation") === "square") {
          sp.delete("orientation");
        } else {
          sp.set("orientation", "square");
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
          const currentRef = squareRef.current;
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
       ref={squareRef}
                    onClick={handleOrientationSquare}
                    className={` ${
                      String(searchParams.get("orientation")) === "square"
                        ? "bg-[#2E67DD]  border-none"
                        : "bg-white  border"
                    } flex cursor-pointer hover:text-white items-center hover:border-none hover:bg-[#2E67DD] p-1 border-black border w-fit rounded-lg`}
                  >
                    <h4 className={`${String(searchParams.get("orientation")) === "square" || hover  ? "text-white":"text-black"} text-base hover:text-white hover:border-white  font-primary`}>Square</h4>&nbsp;
                    <LuSquare className="hover:text-white" color={`${String(searchParams.get("orientation")) === "square" || hover ? "white": "black"}`} size={18} />
                  </button>
  )
}

export default memo(OrientationSquareBtn);
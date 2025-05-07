"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";
import { FaCrown } from "react-icons/fa";

const LicensePremiumBtn = () => {
  const [hover, setHover] = useState(false);
  const premiumRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const handleLicensePremium = () => {
    if (sp.get("license") === "premium") {
      sp.delete("license");
    } else {
      sp.set("license", "premium");
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
    const currentRef = premiumRef.current;
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
    ref={premiumRef}
      onClick={handleLicensePremium}
      className={`${
        String(searchParams.get("license")) === "premium"
          ? "bg-[#2E67DD] text-white border-none"
          : "bg-white"
      } flex flex-row cursor-pointer hover:text-white hover:border-none hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
    >
      <FaCrown color={`${
          String(searchParams.get("license")) === "premium" || hover
            ? "white"
            : "black"
        }`} size={18} />
      &nbsp;
      <h1
        className={`${String(
          searchParams.get("license") === "premium" || hover
            ? "text-white"
            : "text-black"
        )} text-base hover:text-white hover:border-white `}
      >
        Premium
      </h1>
    </button>
  );
};

export default memo(LicensePremiumBtn);

"use client";
import { memo } from "react";
import PriceCard from "./PriceCard";
import { useState } from "react";
import { nanoid } from "nanoid";

const MonthlyYearlyBtn = () => {
  const monthlycards = [
    {
      picurl: "/images/Group 8.png",
      plan: "FREE",
      desc: "We provide complete features and certainly no less competitive with other video applications",
      money: 0,
      avaliability: "Try For Free",
    },
    {
      picurl: "/images/Group 6.png",
      plan: "BASIC",
      desc: " We provide complete features and certainly no less competitive with other video applications",
      money: 499,
      avaliability: "Try Basic",
    },
    {
      picurl: "/images/Group 7.png",
      plan: "PRO",
      desc: "We provide complete features and certainly no less competitive with other video applications",
      money: 899,
      avaliability: "Try Pro",
    },
  ];

  const yearlycards = [
    {
      picurl: "/images/Group 8.png",
      plan: "FREE",
      desc: "We provide complete features and certainly no less competitive with other video applications",
      money: 0,
      avaliability: "Try For Free",
    },
    {
      picurl: "/images/Group 6.png",
      plan: "BASIC",
      desc: "We proide complete features and certoiny no less competitve with other video oppliconons",
      money: 4999,
      avaliability: "Try Basic",
    },
    {
      picurl: "/images/Group 7.png",
      plan: "PRO",
      desc: "We proide complete features and certoiny no less competitve with other video oppliconons",
      money: 6999,
      avaliability: "Try Pro",
    },
  ];

  const [switcher, setSwitcher] = useState<string>("Monthly");
  const handleSwitcher = () => {
    if (switcher === "Monthly") {
      setSwitcher("Yearly");
    } else if (switcher === "Yearly") {
      setSwitcher("Monthly");
    }
  };

  return (
    <>
      <div className=" w-full m-0.5 p-0.5 font-primary">
        <div className=" m-0.5 p-0.5 flex flex-col items-center justify-center ">
          <div className="flex-shrink-0 rounded-[66.32px] bg-[#2E67DD] gap-1 p-1 inline-flex flex-row justify-between items-center">
            <button
              onClick={handleSwitcher}
              className={`${
                switcher === "Monthly"
                  ? "bg-white text-black"
                  : "bg-[#2E67DD] text-white"
              } w-[150px] h-[50px] text-center  cursor-pointer rounded-[66.32px] `}
            >
              {switcher === "Monthly" ? (
                <h2 className=" font-normal text-[16px] capitalize font-roboto500">
                  Monthly
                </h2>
              ) : (
                <h2 className=" font-normal text-[16px] capitalize font-roboto500">
                  Monthly Plan
                </h2>
              )}
            </button>
            <button
              onClick={handleSwitcher}
              className={`${
                switcher === "Yearly"
                  ? "bg-white text-black"
                  : "bg-[#2E67DD] text-white"
              } w-[150px] h-[50px] text-center rounded-[66.32px] cursor-pointer `}
            >
              {switcher === "Yearly" ? (
                <h2 className="font-normal text-[16px] capitalize font-roboto500">
                  Yearly
                </h2>
              ) : (
                <h2 className=" font-normal text-[16px] capitalize font-roboto500">
                  Yearly Plan
                </h2>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mx-0.5 p-0.5">
        <div className="flex flex-col space-y-4 lg:space-y-0  lg:flex-row items-center justify-around m-0.5 p-0.5">
          {switcher === "Monthly" ? (
            monthlycards.map((card) => {
              return (
                <PriceCard
                  key={nanoid().toString()}
                  props={{
                    plan: card.plan,
                    desc: card.desc,
                    money: card.money,
                    avaliability: card.avaliability,
                    picurl: card.picurl,
                  }}
                />
              );
            })
          ) : (
            <></>
          )}
          {switcher === "Yearly" ? (
            yearlycards.map((card) => {
              return (
                <PriceCard
                  key={nanoid().toString()}
                  props={{
                    plan: card.plan,
                    desc: card.desc,
                    money: card.money,
                    avaliability: card.avaliability,
                    picurl: card.picurl,
                  }}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(MonthlyYearlyBtn);

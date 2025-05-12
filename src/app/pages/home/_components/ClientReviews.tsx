/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import ClientCard from "./ClientCard";
import { memo } from "react";
import { nanoid } from "nanoid";

const clients = [
  {
    name: "James Pattinson",
    star: 3,
    review: `"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."`,
    picture: "/images/men1.png",
  },
  {
    name: "Greg Stuart",
    star: 5,
    review: `"Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices."`,
    picture: "/images/men2.png",
  },
  {
    name: "Trevor Mitchell",
    star: 5,
    review: `“Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.”`,
    picture: "/images/men3.png",
  },
];

const ClientReview = () => {
  return (
    <>
      <div className="mt-20 mb-[100.61px] bg-[#FEFAFF] ">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-[#2E67DD] text-[20px] tracking-widest font-roman font-bold leading-  text-center">
              TESTIMONIALS
            </h1>
            <h2 className="text-dark font-bold sm:text-[39px] xl:text-[42px] mt-1 text-[#252468]">
              What our clients say about us.
            </h2>
          </div>
          <div className="flex flex-row items justify-center mt-[44px] ">
            <div className="hidden xl:flex flex-col items-center justify-center">
              <IoIosArrowDropleftCircle
                className=" cursor-pointer"
                color="#5E5CEE"
                size={48}
              />
            </div>
            <div className="flex flex-col gap-[39px] lg:flex-row items justify-center m-1">
              {clients.map((client) => {
                return (
                  <>
                    <ClientCard
                      key={nanoid().toString().toLowerCase()}
                      name={client.name}
                      star={client.star}
                      review={client.review}
                      picture={client.picture}
                    />
                  </>
                );
              })}
            </div>
            <div className=" hidden xl:flex flex-col items-center justify-center">
              <IoIosArrowDroprightCircle
                className=" cursor-pointer"
                color="#5E5CEE"
                size={48}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ClientReview);

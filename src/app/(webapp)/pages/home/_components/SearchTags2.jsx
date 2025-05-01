import { Fragment, memo } from "react";
import { nanoid } from "nanoid";
import { createClient } from "@/utils/supabase/server";

const SearchTags2 = async () => {
  const supabase = await createClient();
  let { data, error } = await supabase.from("tags").select("*").range(0, 4);
  if (error) throw new Error(error.message);

  return (
    <>
      <div className="hidden lg:flex lg:pb-10">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-[18px]">
          {data.map((item) => {
            return (
              <Fragment key={nanoid()}>
                <button className=" px-3 py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white bg-[#3D72DF]  cursor-pointer  border-solid gap-x-2">
                  <h3 className="text-[12px]  font-poppins text-nowrap ">
                    {item.name}
                  </h3>
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.8453 9.14217L6.74219 7.03906"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(SearchTags2);

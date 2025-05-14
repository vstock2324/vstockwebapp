/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { memo } from "react";

const PromotionalViews = () => {
  return (
    <div className="font-primary">
      <div className="container mx-[5px] sm:mx-auto  mt-[20px] ">
        <div className="  xl:m-[100px]  ">
          <div className="flex flex-col lg:flex-row xl:flex-row justify-around items-center  ">
            <div className=" lg:mb-0">
              <h1 className="text-black text-[clamp(16px,16px_+_2.5vw,55px)] font-bold font-poppins  mt-8 ">
                Quality Way of Promotion
              </h1>
              <h1 className="text-black text-[clamp(16px,16px_+_2.5vw,55px)]  font-bold  font-poppins xl:mt-5">
                Now in your hands
              </h1>

              <p className=" text-black text-[clamp(10px,10px_+_2.5vw,34px)] font-poppins font-medium sm:mt-7 xl:mt-9">
                Quickly Create the Quality content and{" "}
                <span className="block font-poppins xl:mt-2 text-black text-[clamp(10px,10px_+_2.5vw,34px)]">
                  publish on multiple social media platforms.
                </span>
              </p>
              <div className="xl:mt-8">
                <span className="">
                  <Link
                    className="text-[#2E67DD] font-poppins text-[clamp(10px,10px_+_2.4vw,31px)] no-underline"
                    href=""
                  >
                    Explore{" "}
                    <img
                      src="/images/arrow.svg"
                      className="inline-block"
                      alt=""
                    />
                  </Link>
                </span>
              </div>
            </div>
            <div className=" md:mt-5 lg:mt-4 xl:mt-5">
              <img
                src="../../images/quality1.svg"
                alt="no images"
                className="w-full lg:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PromotionalViews);

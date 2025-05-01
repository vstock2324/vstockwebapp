/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { memo } from "react";

const PromotionalViews = () => {
  return (
    <div className="   ">
      <div className="container mx-auto  mt-[-20px] ">
        <div className="  xl:m-[100px]  ">
          <div className="flex flex-col lg:flex-row xl:flex-row justify-around items-center  ">
            <div className=" lg:mb-0">
              <h1 className="text-2xl text-black sm:text-[40px]  md:text-[30px] lg:text-[40px] xl:text-[40px] font-bold font-poppins600  mt-8 ">
                Quality Way of Promotion
              </h1>
              <h1 className="text-2xl text-black lg:text-[40px] sm:text-[40px]  font-bold  font-poppins600 xl:mt-5">
                Now in your hands
              </h1>

              <p className="text-base text-black lg:text-[23px] md:text-[12px] font-medium sm:text-[30px] sm:mt-7 xl:mt-9">
                Quickly Create the Quality content and{" "}
                <span className="block xl:mt-2 text-black">
                  publish on multiple social media platforms.
                </span>
              </p>
              <div className="xl:mt-8">
                <span className="text-base">
                  <Link
                    className="text-[#2E67DD] xl:text-[22px] no-underline"
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

"use client";

import useVectorModal from "@/context/useVectorModal";
import { Modal, ModalBody } from "flowbite-react";
import { memo } from "react";
import VectorModalCloseButton from "./VectorModalCloseButton";
import VectorModalPreviousBtn from "./VectorModalPreviousBtn";
import VectorModalNextBtn from "./VectorModalNextBtn";
import RelatedTag from "./RelatedTag";
import SimilarVectors from "./SimilarVectors";
import { PiShareFatFill } from "react-icons/pi";

import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VectorLikeShareWrapper from "./VectorLikeShareWrapper";
import { FaHeart } from "react-icons/fa";

const VectorModal = () => {
  const {
    openVectorModal,
    setOpenVectorModal,
    sizeVectorModal,
    selectedVectorUrl,
  } = useVectorModal();
  const router = useRouter();

  return (
    <>
      <Modal
        dismissible
        show={openVectorModal}
        size={sizeVectorModal}
        onClose={() => setOpenVectorModal(false)}
        position={"center"}
        className="h-[95vh]"
      >
        <VectorModalPreviousBtn />
        <VectorModalCloseButton />
        <ModalBody>
          <div className="m-0.5  flex flex-col">
            <div className=" m-0.5  justify-start items-start flex flex-col  lg:flex-row">
              <div className="relative  m-0.5   flex flex-col items-center justify-center  w-full  lg:w-[60%] xl:w-[65%]">
                <Link className="cursor-pointer" href={"/"}>
                  <img
                    className={`h-[350px] md:h-[375px] lg:h-[400px] xl:h-[425px] 2xl:h-[450px] rounded-md  aspect-auto`}
                    alt=""
                    src={selectedVectorUrl}
                  />
                </Link>
                <div className="absolute inline-block -translate-x-[10%] -translate-y-[15%] top-[15%] right-[10%] items-center justify-center space-y-1 lg:hidden">
                  <FaHeart fill="black" className="cursor-pointer" size={30} />
                  <PiShareFatFill
                    fill="black"
                    className="cursor-pointer"
                    size={30}
                  />
                </div>
              </div>
              <div className="relative hidden lg:flex lg:flex-col lg:items-start lg:justify-between m-0.5 lg:h-auto lg:w-[40%] xl:w-[35%] xl:h-[425px] 2xl:h-[450px]">
                <div className=" m-0.5 p-1 flex flex-row items-center justify-start ">
                  <h3 className="text-lg font-bold text-black">Name</h3>
                  &nbsp;&nbsp;
                  <span className="text-sm font-normal text-wrap">
                    {/* {modal.vectorItem ? modal.vectorItem.name : ""} */}
                  </span>
                </div>
                <div className=" m-0.5 p-1 ">
                  <h3 className="text-lg font-bold text-black">Description</h3>
                  <p className="text-sm font-normal text-wrap">
                    {/* {modal.vectorItem ? modal.vectorItem.description : ""} */}
                  </p>
                </div>
                <div className="m-0.5 w-full p-1 h-auto hidden lg:flex lg:flex-col items-center space-y-1">
                  <p className="text-base font-semibold text-black  m-0.5 p-1">
                    Download or edit in your computer as
                  </p>

                  <div className="flex flex-row w-full items-center justify-around  m-0.5 p-1">
                    <Link
                      className="bg-[#0BAC6F] inline-flex items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white"
                      download
                      href={"/"}
                    >
                      SVG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>{" "}
                    <Link
                      
                      href={"/"}
                      download={true}
                      className="bg-[#0BAC6F] inline-flex items-center w-[30%]  justify-center p-1 rounded-full text-lg font-normal text-white"
                      
                    >
                      JPEG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>{" "}
                    <Link
                      className="bg-[#0BAC6F] inline-flex w-[30%] justify-center items-center p-1 rounded-full text-lg font-normal text-white"
                      href={"/"}
                    >
                      AI&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>
                  </div>
                </div>
                <div className=" hidden lg:flex lg:flex-col bg-[#F3F3F3] h-auto w-full  items-center space-y-1 px-3 py-1">
                  <p className="text-lg font-normal m-0.5">OR</p>
                  <div className=" inline-flex flex-row items-center w-full justify-around m-0.5 p-1">
                    <button className="rounded-full text-nowrap p-2 text-base w-1/2 text-white m-0.5 bg-[#0B85AC]">
                      Edit Online
                    </button>
                    <button
                      onClick={() => router.push("/editor")}
                      className="rounded-full  p-2 text-base w-1/2 text-white text-nowrap m-0.5 bg-[#0B85AC]"
                    >
                      Edit Animation
                    </button>
                  </div>
                </div>
                <VectorLikeShareWrapper/>
              </div>
            </div>
            <RelatedTag />
            <SimilarVectors />
          </div>
        </ModalBody>
        <VectorModalNextBtn />
      </Modal>
    </>
  );
};

export default memo(VectorModal);

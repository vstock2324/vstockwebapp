"use client";
import React from "react";
import { memo, useState, useRef } from "react";
import PasswordInput from "./PasswordInput";
import { BiShow, BiHide } from "react-icons/bi";
const PasswordInputWrapper = () => {
  const [show, setShow] = useState<boolean>(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full">
      <PasswordInput
        required
        ref={passwordInputRef}
        type={show ? "text" : "password"}
        name="adminPass"
        className=" focus:outline-none  font-primary border border-gray-300 rounded p-2 mb-2 w-full"
        placeholder="Enter Password"
      />
      {show ? (
        <BiHide
          onClick={() => setShow(false)}
          className="absolute right-2 top-1/2 transform -translate-y-[60%] cursor-pointer"
          size={24}
          color="#767676"
        />
      ) : (
        <BiShow
          onClick={() => setShow(true)}
          className="absolute right-2 top-1/2 transform -translate-y-[60%] cursor-pointer"
          size={24}
          color="#767676"
        />
      )}
    </div>
  );
};

export default memo(PasswordInputWrapper);

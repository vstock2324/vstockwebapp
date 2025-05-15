"use client";
import { memo } from "react";
import { nanoid } from "nanoid";

const SelectLicense = () => {
  return (
    <>
      <select defaultValue={""} required className=" w-[300px] border rounded-md px-2 py-2 focus:outline-none border-gray-800" id="vectorlicense" name="vectorlicense">
      <option  value={""}  disabled hidden>Choose an option</option>
        <option key={nanoid().toString()} value={`free`}>
          Free
        </option>
        <option key={nanoid().toString()} value={`free`}>
          Premium
        </option>
      </select>
    </>
  );
};

export default memo(SelectLicense);

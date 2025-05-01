"use client";
import { memo } from "react";
import { nanoid } from "nanoid";

const SelectOrientation = () => {
  return (
    <>
      <select id="vectororientation" name="vectororientation" defaultValue={""} required className="focus:outline-none w-[300px] rounded-md px-2 py-2 border border-gray-800">
      <option  value={""} disabled hidden>Choose an option</option>
        <option key={nanoid().toString()} value={`horizontal`}>
          Landscape
        </option>
        <option key={nanoid().toString()} value={`vertical`}>
          Portarit
        </option>
        <option key={nanoid().toString()} value={`square`}>
          Square
        </option>
      </select>
    </>
  );
};

export default memo(SelectOrientation);

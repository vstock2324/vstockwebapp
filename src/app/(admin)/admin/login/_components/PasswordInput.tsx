"use client";
import React, { memo } from "react";

const PasswordInput = React.forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <input ref={ref} {...props} />
      </>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export default memo(PasswordInput);

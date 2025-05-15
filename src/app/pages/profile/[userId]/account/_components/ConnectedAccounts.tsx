import Link from "next/link";
import React, { memo } from "react";

const ConnectedAccounts = () => {
  return (
    <div className="border-b-neutral-600 w-full">
      <h1 className="mt-10 mb-5  w-full">Connected Accounts</h1>
      <p className="mb-5">
        Manage the social media accounts connected to your profile for easy
        login.
      </p>
      <div className="mt-20">
        <span className="font-bold">Note:</span> This account is needed for
        login and can’t be disconnected.{" "}
        <Link
          className="text-[#2E67DD]  font-bold"
          href={"/page/home"}
          rel="noreferrer noopener"
        >
          Contact us
        </Link>{" "}
        for more info. We are working on improving this experience
      </div>
    </div>
  );
};

export default memo(ConnectedAccounts);

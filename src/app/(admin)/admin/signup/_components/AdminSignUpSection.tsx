"use client";
import React from "react";
import { memo, useActionState } from "react";
import PasswordInputWrapper from "./PasswordInputWrapper";
import { handleAdminSignupFormSubmit } from "@/actions/admin/signup/signup";
import { useRouter } from "next/navigation";

const initialState = {
  adminEmail: "",
  adminPass: "",
  adminPassConfirm: "",
};

const AdminSignUpSection = () => {
  const router= useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, action, pending] = useActionState(
    handleAdminSignupFormSubmit,
    initialState
  ); // Placeholder for data, action, and pending state

  return (
    <section className="flex flex-col items-center justify-center w-[400px] h-[350px] bg-gray-100">
      <div className="flex flex-row items-center justify-start">
        <h1 className="text-3xl font-bold mb-4">Admin Sign Up</h1>
      </div>
      <form
        action={action}
        className="flex flex-col items-center justify-center w-full p-4 border-0 rounded-md"
      >
        <div className="flex flex-col items-start justify-center w-full mb-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">Email</label>
          <input
            name="adminEmail"
            type="email"
            placeholder="Enter Email"
            required
            className="border focus:outline-none border-gray-300 rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">Password</label>
          <PasswordInputWrapper name="adminPass" placeholder="Enter Password" />
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">Confirm Password</label>
          <PasswordInputWrapper name="adminPassConfirm" placeholder="Enter Confirm Password" />
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-1">
          <button
            disabled={pending}
            type="submit"
            className="bg-[#2E67DD] disabled:bg-[#2E67FF] cursor-pointer text-white rounded p-2 w-full"
          >
            Sign Up
          </button>
          <button
          onClick={()=>router.push('/admin/login')}
            type="button"
            className="border-[#2E67DD] cursor-pointer text-[#2E67DD] hover:text-white hover:border-none hover:bg-[#2E67DD] border rounded p-2 w-full mt-2"
          >
            Login
          </button>
          <button
            type="reset"
            className="border-[#2E67DD] cursor-pointer text-[#2E67DD] hover:text-white hover:border-none hover:bg-[#2E67DD] border rounded p-2 w-full mt-2"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default memo(AdminSignUpSection);

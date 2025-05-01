import React from "react";
import { memo } from "react";
import PasswordInputWrapper from "./PasswordInputWrapper";
import { handleAdminLoginFormSubmit } from "@/actions/admin/login/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { createClient } from "@/utils/supabase/server";

interface ExtendedJwtPayload extends JwtPayload {
  user_role?: string;
}

const AdminLoginSection = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.access_token) {
    const decodedToken = jwtDecode<ExtendedJwtPayload>(session?.access_token);
    if (decodedToken.user_role === "admin") redirect("/admin/dashboard/users");
  }
    else return (
    <section className="flex flex-col items-center justify-center w-[400px] h-[350px] bg-gray-100">
      <div className="flex flex-row items-center justify-start">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      </div>
      <form
        action={handleAdminLoginFormSubmit}
        className="flex flex-col items-center justify-center w-full p-4 border-0 rounded-md"
      >
        <div className="flex flex-col items-start justify-center w-full mb-2">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Email
          </label>
          <input
            name="adminEmail"
            type="email"
            placeholder="Enter Email"
            required
            className="border focus:outline-none border-gray-300 rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-4">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Password
          </label>
          <PasswordInputWrapper />
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-4">
          <button
            type="submit"
            className="bg-[#2E67DD] disabled:bg-[#2E67FF] cursor-pointer text-white rounded p-2 w-full"
          >
            {"Login"}
          </button>
          <Link
            href={"/admin/signup"}
            className="border-[#2E67DD] cursor-pointer text-center text-[#2E67DD] hover:text-white hover:border-none hover:bg-[#2E67DD] border rounded p-2 w-full mt-2"
          >
            Sign Up
          </Link>
          <button
            type="reset"
            className="border-[#2E67DD] cursor-pointer text-[#2E67DD] hover:text-white hover:border-none hover:bg-blue-500 border rounded p-2 w-full mt-2"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}


export default memo(AdminLoginSection);

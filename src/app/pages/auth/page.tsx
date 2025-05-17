/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import supabase from "@/utils/supabase/supabaseBrowserClient";


export default function AuthPage() {
  const handleGoggleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_DOMAIN_CALLBACK}`,
      },
    });
    if (error) throw new Error("Error occured while signin", error);
    console.log("Google sign in data", data);
  };
  return (
    <>
      <div id="AuthPage" className="w-full min-h-screen bg-white">
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href="/" className="min-w-[170px]">
            <Image alt={""} height="50" width="170" src="/logo/vstocks1.png" />
          </Link>
        </div>

        <div className="w-full flex items-center justify-center font-primary p-5 text-black border-b-gray-300">
          Login / Register
        </div>

        <div className="max-w-[400px] mx-auto px-2">
          <div className="flex items-center justify-center">
            <button
              onClick={handleGoggleSignIn}
              className=" cursor-pointer px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <FcGoogle size={24} />
              <span className="text-black">Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

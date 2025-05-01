import { memo } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import LoggedInUser from "./LoggedInUser";

const NavBarLoginButton1 = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <li className="flex flex-row items-center justify-between gap-x-4">
      {user ? (
        <LoggedInUser
          name={user.user_metadata["full_name"] || null}
          picture_url={user.user_metadata["avatar_url"] || null}
        />
      ) : (
        <div className="flex flex-row items-center justify-between gap-x-4">
          <Link
            className="text-white text-[16px] border-none hover:cursor-pointer"
            href={"/pages/login"}
          >
            Login
          </Link>
          <Link
            href={"/pages/login"}
            className="text-white text-[16px] border-none  hover:cursor-pointer  bg-[#2E67DD] rounded-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </li>
  );
};

export default memo(NavBarLoginButton1);

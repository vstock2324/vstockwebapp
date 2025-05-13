import { memo } from "react";
import Link from "next/link";
import { createClient } from "../../../../utils/supabase/server";
import LoggedInUser from "./LoggedInUser";
import { FaRegUser } from "react-icons/fa6";

const NavBarLoginButton0 = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <li className="flex flex-row items-center justify-between gap-x-4 pb-1">
      {user ? (
        <LoggedInUser
        userId={user.id}
          name={user.user_metadata["full_name"] || null}
          picture_url={user.user_metadata["avatar_url"] || null}
        />
      ) : (
                   <Link
            className=" flex flex-row items-center justify-center space-x-3 border-white dark:border-white border rounded-full px-3 py-0.5 hover:cursor-pointer text-nowrap"
            href={"/pages/login"}
            prefetch
          >
            <FaRegUser color="white" size={10}/>
            <span className="text-white text-[16px]">Login</span>
          </Link>
        
      )}
    </li>
  );
};

export default memo(NavBarLoginButton0);

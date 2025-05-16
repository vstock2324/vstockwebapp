import { memo } from "react";
import Link from "next/link";
import { createClient } from "../../../../utils/supabase/server";
import LoggedInUser from "./LoggedInUser";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { FaRegUser } from "react-icons/fa6";

interface ExtendedJwtPayload extends JwtPayload {
  user_role?: string;
}

const NavBarLoginButton2 = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw new Error(error.message);
    if (!data?.session) throw new Error("No Session found");
    const jwt = jwtDecode<ExtendedJwtPayload>(data.session.access_token);
    if (jwt.user_role !== "admin") {
      return (
        <li>
          <LoggedInUser
           emailId={user.email}
            name={user.user_metadata["full_name"] || null}
            picture_url={user.user_metadata["avatar_url"] || null}
          />
        </li>
      );
    } else if (jwt?.user_role === "admin") {
      return (
        <li>
          <LoggedInUser
            emailId={user.email}
            name={"Admin"}
            picture_url={"/images/admin.png"}
          />
        </li>
      );
    }
  } else {
    return (
      <li className="flex flex-row items-center justify-between gap-x-4">
            <Link
            className=" flex flex-row items-center justify-center space-x-3 border-white dark:border-white border rounded-full px-3 py-0.5 hover:cursor-pointer text-nowrap"
            href={"/pages/login"}
            prefetch
          >
            <FaRegUser color="white" size={14}/>
            <span className="text-white text-[20px]">Login</span>
          </Link>
      </li>
    );
  }
};

export default memo(NavBarLoginButton2);

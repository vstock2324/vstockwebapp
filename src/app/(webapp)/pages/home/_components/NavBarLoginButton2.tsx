import { memo } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import LoggedInUser from "./LoggedInUser";
import { jwtDecode, JwtPayload } from "jwt-decode";

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
            name={user.user_metadata["full_name"] || null}
            picture_url={user.user_metadata["avatar_url"] || null}
          />
        </li>
      );
    } else if (jwt?.user_role === "admin") {
      return (
        <li>
          <LoggedInUser
            name={"Admin"}
            picture_url={"/images/admin.png"}
          />
        </li>
      );
    }
  } else {
    return (
      <li>
        <Link
          className="border border-white  rounded-[25px] px-6 py-1"
          href={"/pages/login"}
        >
          Login
        </Link>
      </li>
    );
  }
};

export default memo(NavBarLoginButton2);

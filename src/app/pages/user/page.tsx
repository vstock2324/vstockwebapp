import { permanentRedirect } from "next/navigation";

export default function ProfilePage(){
    permanentRedirect("/pages/user/projects?page=1");
}
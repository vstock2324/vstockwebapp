import { permanentRedirect } from "next/navigation";

export default function VideoEditPage() {
   permanentRedirect("/admin/dashboard/uploads/videos");
}
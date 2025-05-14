import { redirect } from "next/navigation";
import MainNestedLayout from "./_components/MainNestedLayout";
import Tabs from "../_components/Tabs";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function VideosPage({searchParams}:{searchParams:SearchParams}) {
  const {page}=await searchParams;
   if(page === undefined || null || "")  redirect("/pages/home/videos?page=1");
  return (
    <MainNestedLayout>
      <Tabs />
    </MainNestedLayout>
  );
}

import MainNestedLayout from "../_components/MainNestedLayout";
import Tabs from "../_components/Tabs";
import VectorContextsWrapper from "./_components/VectorContextsWrapper";
import { redirect } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function VectorsPage({searchParams}:{searchParams:SearchParams}) {
  const {page}=await searchParams;
  console.log(page);
   if(page === undefined || null || "")  redirect("/pages/home/vectors?page=1");
  return (
    <MainNestedLayout>
      <Tabs />
      <VectorContextsWrapper/>
    </MainNestedLayout>
  );
}

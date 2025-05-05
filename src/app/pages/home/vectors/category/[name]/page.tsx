import { redirect } from "next/navigation";
import MainNestedLayout from "../../../_components/MainNestedLayout";
import Tabs from "../../../_components/Tabs";
import VectorContextsWrapper from "../../_components/VectorContextsWrapper";
type Params = Promise<{ name: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
export default async function VectorsCategoryNamePage({
    params,
    searchParams,
  }: {
    params: Params
    searchParams: SearchParams
  }){
    const {name}=await params;
    const { page } = await searchParams;
if(name===undefined || null || "") redirect("/pages/home/vectors?page=1");
    else if(name!== undefined || null || "") {
        if(page===undefined|| null || ""){
          redirect(`/pages/home/vectors/category/${decodeURIComponent(name)}?page=1`);
        }
    }
  return (
    <>
      <MainNestedLayout>
        <Tabs />
        <VectorContextsWrapper/>
      </MainNestedLayout>
    </>
  );
}

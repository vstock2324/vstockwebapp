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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {name}=await params;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { page } = await searchParams;
  return (
    <>
      <MainNestedLayout>
        <Tabs />
        <VectorContextsWrapper/>
      </MainNestedLayout>
    </>
  );
}

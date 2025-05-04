import { redirect } from "next/navigation";
type Params = Promise<{ name: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function VectorsNamePage({
    params,
    searchParams,
  }: {
    params: Params
    searchParams: SearchParams
  }){
    const {name}=await params;
    const { page } = await searchParams;
    if(name.toLowerCase()!=="category" &&  name.toLowerCase()!=="categories")
    redirect(`/pages/home/vectors/category/${name}?page=${page || 1}`);
    else redirect(`/pages/home/vectors?page=${page || 1}`);
}
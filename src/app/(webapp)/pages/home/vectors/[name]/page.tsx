import { redirect } from "next/navigation";

export default async function Page({params}:{params:Promise<{name:string}>}){
    const {name}=await params;
    redirect(`/home/vectors/category/${name}`);
}
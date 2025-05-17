import { redirect } from "next/navigation";
import FilterAndTable from "./_components/FilterAndTable";
import MainLayout from "./_components/MainLayout";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async  function  UserDownloadsPage({searchParams}:{searchParams: SearchParams}){
    const { page } = await searchParams;
       if((page===undefined|| null || "")){
              redirect(`/pages/user/downloads?page=1`);
        }

    return (<MainLayout>
        <FilterAndTable/>
    </MainLayout>)
}
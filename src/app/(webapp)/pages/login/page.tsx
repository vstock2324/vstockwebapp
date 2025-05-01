import Image from "next/image";
import MainLayout from "./_components/MainLayout";
import Login from "./_components/Login";
export default function LoginPage() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col items-center justify-center  lg:flex-row  lg:justify-between ">
          <div className="hidden bg-[#2E67DD]  px-[37px] py-[52px] w-full lg:w-[40%]  lg:flex items-center justify-center">
            <Image width={500} height={500} src="/images/login2.svg" alt="" />
          </div>
          <Login />
        </div>
      </MainLayout>
    </>
  );
}

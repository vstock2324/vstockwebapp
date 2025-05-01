import { memo, ReactNode } from "react"
import Header from "./Header"
import Footer from "@/components/Footer"

const MainLayout=({children}:{children:ReactNode})=>{
    return (<>
    <Header/>
    {children}
    <Footer/>
    </>)

}

export default memo(MainLayout)
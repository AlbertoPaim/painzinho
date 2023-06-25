import { Header } from "@/app/components/header";
import { Section } from "@/app/components/section";
import { Menu } from "./components/Menu";


 function Page() {
  return (
    <div className=" bg-gradient-to-b from-sky-200 to-white h-screen w-screen flex flex-col md:overflow-x-hidden ">
      <Header/>
      <Menu/>
      <Section/>

    </div>
  )
}


export default Page;
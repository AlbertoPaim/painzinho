import { useState } from "react"

export const Header = () =>{
    
    

    

    
    return (
       <header className=" h-16 w-full  shadow-sm shadow-sky-700  flex items-center justify-between p-4 
       
       ">
        <span className="text-black font-bold text-2xl flex items-align">Painzinho <img className="w-10 ml-2" src="/imgs/Star.png" alt="" /></span>
        <img  src="/imgs/menu.png" alt="Menu"  className="w-8 md:hidden"/> 
        <nav className="hidden md:block mr-8">
            <ul className="flex gap-x-16 font-bold text-sky-700 text-xl uppercase ">
                <a href="#sobre" className="hover:text-black"><li>Sobre</li></a>
                <a href="#produtos" className="hover:text-black"><li>Produtos</li></a>
            </ul>
        </nav>  

        
       </header>
    )
}
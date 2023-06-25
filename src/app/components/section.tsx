export const Section = () =>{
    return(
        <main className="">
            <section className=" px-2 md:px-12  pt-8 pb-6 ">
                
                <div className="">
                <h2 className="text-2xl font-bold md:text-4xl text-center my-6"> Bem-vindo ao "Painzinho"!</h2> 
                <p id="sobre
                   " className="text-md mb-6 md:text-2xl text-center"> Nossa loja online é o destino ideal para pais e familiares que desejam encontrar os melhores produtos para bebês. Com uma ampla seleção de itens essenciais para todas as fases do crescimento do seu pequeno, oferecemos conveniência, qualidade e segurança em um só lugar.</p>
                </div>
                
                

                <div className=" flex  flex-col  md:flex-row flex-wrap gap-4 justify-center  mx-4 md:w-ful   md:mx-auto">
                <img className="border-x   mr-4 md:mr-0 " src="/imgs/roupa1.jpg" alt="relogio" />
                <img className="border-x   mr-4 md:mr-0 " src="/imgs/roupa2.jpg" alt="relogio" />

                </div>
                
                <div id="produtos"className=" md:items-center  md:justify-center text-2xl cursor-pointer font-bold text-center py-6">
                <a href="https://api.whatsapp.com/send/?phone=5571986020429&text&type=phone_number&app_absent=0" target="_blanck"><button className=" bg-sky-400 text-white py-1 px-2 rounded-md hover:opacity-50"> Saiba Mais</button> </a>
                </div>

            </section> 
        
 
        </main>
    )
}
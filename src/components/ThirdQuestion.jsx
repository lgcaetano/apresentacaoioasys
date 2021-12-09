import QandA from "./QandA"
import LinkDiv from "./LinkDiv"
import { useEffect } from "react"


export default function ThirdQuestion(props){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    let thirdAnswer = 'Bom, acredito que um pouco da resposta para esta pergunta está espalhada ao longo de toda essa apresentação. Eu amo programar, resolver problemas, criar projetos e experiências interativas, mesmo que elas sejam bem simples. Quando percebi a liberdade que tinha para fazer minha apresentação, não tinha dúvidas do que queria fazer: tinha que ser um site, algo que não só me permite praticar minhas habilidades como também me dá prazer de fazer. E é claro que aprender mais sobre tecnologia permite que eu expanda meus limites, cada nova funcionalidade ou tecnologia nova que aprendo me permite construir mais um projeto, resolver mais um problema, me torna mais competente e me permite ser cada vez mais criativo. E é assim que me inspiro para buscar cada vez mais!'

    return (
        <div className="first flex flex-col items-center justify-around">
            <QandA number={3} question="O que te inspira no seu dia-dia de estudo?" answer={thirdAnswer}></QandA>
            <div className="flex flex-col">
                <div className="flex justify-around items-center border-b-2 border-white pb-3">
                    <div className="border-4 border-white rounded-full overflow-hidden h-20 w-20 mx-6">
                        <img src="https://pbs.twimg.com/profile_images/1170758946627510273/8SgXi9XN.jpg" alt="" />
                    </div>
                    <h1 className="text-xl font-black">Feito por Luis Gabriel Caetano Diniz</h1>
                </div>
                <div className="flex items-center justify-center my-3 border-b-2 border-white pb-3">
                    <a href="https://github.com/lgcaetano" className="flex items-center text-xl font-bold">
                        <i className="fab fa-github text-4xl mr-2"></i> Clique para acessar meu Github
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://lgcaetano.netlify.app/" className="flex items-center text-xl font-bold text-green-400">
                        Clique para acessar meu Portfólio
                    </a>
                </div>
            </div>

            <LinkDiv href={"/"} label={"Voltar ao Início"}></LinkDiv>
        </div>
    )
}
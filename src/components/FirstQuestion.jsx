import Country from "./Country"
import QandA from "./QandA"
import LinkDiv from "./LinkDiv" 
import { useEffect } from "react"


export default function FirstQuestion(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let firstAnswer = ` Acho que não tem nada que mais motive do que minha vontade de viajar, conhecer outras culturas e viver umas boas aventuras.
    Felizmente, já consegui viver um pouco disso, já conheço alguns cantos do mundo, mas a sensação é de que tem muita
    coisa pra ver ainda, muitos sonhos a serem realizados. Mas até que dá pra ter um gostinho desses lugares daqui de longe não é mesmo?
    Então desce a página pra eu te mostrar alguns desses lugares.`


    return (
        <div className="first flex flex-col items-center justify-around">
            
            <QandA number={1} question={"O que você quer fazer pelo mundo?"} answer={firstAnswer}>

            </QandA>
            <i className="fas fa-arrow-down text-9xl mt-20"></i>
            <Country name='Japão'></Country>
            <Country name='Alemanha'></Country>
            <Country name='Reino_Unido'></Country>
            <Country name='Índia'></Country>


            <LinkDiv href={"/second"} label={"Segunda Pergunta"}></LinkDiv>
        </div>
    )
}
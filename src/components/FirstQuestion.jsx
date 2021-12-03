import Country from "./Country"

export default function FirstQuestion(props) {
    return (
        <div className="first flex flex-col items-center justify-around">
            <h1 className="text-5xl font-bold intro">
                1. O que você quer fazer pelo mundo?
            </h1>
            <div className="resposta border-4 border-white mt-40 p-6 max-w-half expand overflow-hidden">
                <div className="expand-text">
                    Acho que não tem nada que mais motive do que minha vontade de viajar, conhecer outras culturas e viver umas boas aventuras.
                    Felizmente, já consegui viver um pouco disso, já conheço alguns cantos do mundo, mas a sensação é de que tem muita
                    coisa pra ver ainda, muitos sonhos a serem realizados. Mas até que dá pra ter um gostinho desses lugares daqui de longe não é mesmo?
                    Então desce a página pra eu te mostrar alguns desses lugares.
                </div>
            </div>
            <i className="fas fa-arrow-down text-9xl mt-20"></i>
            <Country name='Japão'></Country>
            <Country name='Reino_Unido'></Country>
            <Country name='Índia'></Country>
        </div>
    )
}
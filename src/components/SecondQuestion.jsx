import { useEffect } from "react"
import QandA from "./QandA"
import LinkDiv from "./LinkDiv"


export default function SecondQuestion(props){

    let secondAnswer = 'Um desafio que enfrentei na minha experiência desenvolvendo software do qual tenho orgulho foi a criação de uma pequena aplicação web que construía e resolvia quebra-cabeças de Sudoku. Este projeto foi um desafio por acabar exigindo muito mais de mim do que eu esperava, me forçando a pesquisar sobre assuntos com os quais eu ainda não tinha tido contato, como paralelismo em páginas web. E acredito que aí esteja um dos meus pontos fortes: não tenho medo de explorar e aprender coisas novas quando necessário. Na verdade, até gosto mais de projetos que me forcem a aprender novas tecnologias. A aplicação foi embutida nesta página e pode ser visualizada abaixo, com instruções de como usá-la!'


    useEffect(() => {
        document.querySelector(':root').style.setProperty('--main-color', 'rgb(17, 24, 39)')
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="first flex flex-col items-center justify-around">
            <QandA number={"2"} question="Conta pra gente um desafio que você superou e
             um ponto forte que te ajudou a lidar com ele" answer={secondAnswer}
            ></QandA>
            <div className=" flex flex-col bg-white rounded-xl overflow-hidden border-4 border-white sudoku-w mb-20">
                <iframe src="https://lgcaetanosudoku.netlify.app/" className="sudoku-h sudoku-w overflow-hidden" title="sudoku"></iframe>
                <div className="p-5 bg-main transition-all">
                Para gerar um nvo quebra-cabeças, pressione o botão <b>PLAY!</b> <br />
                Para limpar o grid do Sudoku, clique em <b>Clear</b> <br />
                Para que o quebra-cabeças seja resolvido pela aplicação, clique em <b>Solve</b>, o algoritmo de resolução completará o restante do grid com uma solução válida<br />
                

                </div>
            </div>


            <LinkDiv href={"/third"} label={"Terceira Pergunta"}></LinkDiv>
        </div>
    )
}
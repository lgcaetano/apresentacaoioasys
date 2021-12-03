import { Link } from "react-router-dom"

export default function Landing(props){
    return (
        <div className="presentation font-sans flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold intro">
                Feito com amor, carinho, 
                <span className="text-indigo-500"> React</span> e <span className="text-blue-400">Tailwind...</span>
            </h1>
            <Link to="first">
                <button className="border-2 rounded-md p-3 mt-10 hover:bg-white
                 hover:text-gray-900 transition-all text-lg intro-button">
                    Primeira Pergunta
                </button>
            </Link>
        </div>
    )
}
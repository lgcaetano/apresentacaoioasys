import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Landing(props){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="presentation font-sans flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold intro flex title">
                Feito com amor, carinho, 
                <span className="text-pink-500 mx-3"><i class="fab fa-react "></i> React</span> e <span className="text-blue-300 flex mx-3"> Tailwind...</span>
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
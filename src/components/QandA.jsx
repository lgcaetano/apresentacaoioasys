export default function QandA(props){
    return (
        <>
            <h1 className="text-5xl font-bold intro max-w-title">
                <span className="text-pink-500">{props.number}.</span> {props.question}
            </h1>
            <div className="resposta border-4 border-white mt-40 p-6 max-w-half expand overflow-hidden mb-10 rounded-lg">
                <div className="expand-text">
                    {props.answer}
                </div>
            </div>
        </>
    )
}
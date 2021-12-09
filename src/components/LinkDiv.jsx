import { Link } from "react-router-dom";

export default function LinkDiv(props){
    return (
        <div className=" w-almost-screen flex justify-end h-auto box-border mt-10 px-10">
            <Link to={props.href}>
                <button className="border-2 rounded-md p-3  hover:bg-white
                 text-bkg-hover transition-all text-lg">
                     {props.label} <i className="fas fa-arrow-right mx-1"></i>
                </button>
            </Link>
        </div>
    )
}
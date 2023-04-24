import { Link } from "react-router-dom";

export default function NavButton ( {buttonText, linkTo}) {

    return (
        <Link to={linkTo}>
            <button className="bg-sky-500 hover:bg-sky-700 rounded-full py-1 px-2.5 text-white block mx-auto">{buttonText}</button>
        </Link>
    )
}
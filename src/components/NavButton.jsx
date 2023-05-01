import { Link } from "react-router-dom";

export default function NavButton ( {buttonText, linkTo}) {

    return (
        <Link to={linkTo}>
            <button className="bg-sky-500 hover:bg-sky-700 rounded-full py-1 px-2.5 text-white absolute bottom-[5%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 lg:w-auto whitespace-nowrap">{buttonText}</button>
        </Link>
    )
}
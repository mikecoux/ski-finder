import { useLoaderData, useNavigate } from "react-router-dom"
import NavButton from "../components/NavButton"

export default function DetailPage () {
    const {brand, name, year, image, content, dimensions, lengths, weight} = useLoaderData()
    const navigate = useNavigate()

    return (
        <>
            <div className="m-8 flex flex-row">
                <div className="basis-1/4 min-w-fit border-r-4 pr-4">
                    <h1 className="text-lg font-bold pb-4">{brand} {name} <br />{year}</h1>
                    <ul className="space-y-2">
                        <li>Waist: {dimensions.waist} cm</li>
                        <li>Tip: {dimensions.tip} cm</li>
                        <li>Tail: {dimensions.tail} cm</li>
                        <li>Weight: {weight} g</li>
                        <li>Lengths offered: <br />{lengths.join(', ')}</li>
                    </ul><br />
                    <NavButton linkTo={'/skis'} buttonText={'Add to Quiver'}/>
                </div>
                <img src={image} alt={name} className="block mx-auto shrink max-h-96"/>
            </div>
            <div className="m-8">
                <p>{content}</p><br />
                <button onClick={() => navigate(-1)} className="block mx-auto w-fit text-sky-500 hover:text-sky-700">&larr; Back to browse</button>
            </div>
        </>
    )
}
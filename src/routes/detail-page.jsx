import { useLoaderData, useNavigate } from "react-router-dom"
import NavButton from "../components/NavButton"
import { useState } from "react"

export default function DetailPage () {
    const {brand, name, year, image, content, dimensions, lengths, weight} = useLoaderData()
    const navigate = useNavigate()
    const [imageNum, setImageNum] = useState(0)

    function leftArrow () {
        if (imageNum === 0) {
            setImageNum(image.length - 1)
        } else {
            setImageNum((imageNum) => imageNum - 1)
        }
    }

    function rightArrow () {
        if (imageNum === image.length -1) {
            setImageNum(0)
        } else {
            setImageNum((imageNum) => imageNum + 1)
        }
    }

    return (
        <div className="w-4/5 block mx-auto">
            <div className="m-8 flex flex-row">
                <div className="basis-1/2 min-w-fit">
                    <h1 className="text-lg font-bold pb-4 text-center">{brand} {name} <br />{year}</h1>
                    <ul className="space-y-2 text-center">
                        <li>Waist: {dimensions.waist} cm</li>
                        <li>Tip: {dimensions.tip} cm</li>
                        <li>Tail: {dimensions.tail} cm</li>
                        <li>Weight: {weight} g</li>
                        <li>Lengths offered: <br />{lengths.join(', ')}</li>
                    </ul><br />
                    <NavButton linkTo={'/skis'} buttonText={'Add to Quiver'}/>
                </div>
                <div className="flex flex-row">
                    <span className="block my-auto text-3xl text-slate-300 hover:text-slate-400 cursor-pointer" onClick={leftArrow}>◁</span>
                    <img src={image[imageNum]} alt={name} className="block mx-auto shrink max-h-96"/>
                    <span className="block my-auto text-3xl text-slate-300 hover:text-slate-400 cursor-pointer" onClick={rightArrow}>▷</span>
                </div>
            </div>
            <div className="m-8 space-y-4 w-1/2 block mx-auto">
                <h3 className="font-bold italic text-center">From the manufacturer:</h3>
                <p>{content}</p>
                <button onClick={() => navigate(-1)} className="block mx-auto w-fit text-sky-500 hover:text-sky-700">&larr; Back to browse</button>
            </div>
        </div>
    )
}
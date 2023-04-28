import SkiTile from "./SkiTile"
import { useLocation } from "react-router-dom"

export default function SkiListTiles ({ skiData }) {
    const location = useLocation()
    console.log(skiData)
    const skiTiles = skiData.map((ski) => {
        return <SkiTile key={ski.id} id={ski.id} image={ski.image} brand={ski.brand} name={ski.name} />
    }) 

    function centerTiles() {
        if (location.pathname.includes('results')) {
            return ' justify-center' 
        } else {
            return ''
        }
    }

    return (
        <div className={"flex flex-row flex-nowrap space-x-4 overflow-auto" + centerTiles()}>
            {skiTiles}
        </div>
    )
}
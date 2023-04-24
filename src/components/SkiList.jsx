import SkiDetails from "./SkiDetails"
import SkiListItem from "./SkiListItem"

export default function SkiList ( {skis, onSelectSki} ) {
    const allSkis = skis.map((ski) => {
        return <SkiListItem key={ski.id} ski={ski} onSelectSki={onSelectSki} />
    })

    return (
        <div id="ski-list" className="basis-1/3 text-center">
            <h1>Browse For Skis Here</h1>
            {allSkis}
        </div>
    )
}
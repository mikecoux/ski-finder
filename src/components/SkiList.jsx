import SkiDetails from "./SkiDetails"
import SkiListItem from "./SkiListItem"

export default function SkiList ( {skis, onSelectSki} ) {
    const allSkis = skis.map((ski) => {
        return <SkiListItem key={ski.id} ski={ski} onSelectSki={onSelectSki} />
    })

    return (
        <div id="ski-list">
            {allSkis}
        </div>
    )
}
import SkiListItem from "./SkiListItem"

export default function SkiList ( {skis, onSelectSki} ) {
    const allSkis = skis.map((ski) => {
        return <SkiListItem key={ski.id} ski={ski} onSelectSki={onSelectSki} />
    })

    return (
        <div id="ski-list" className="basis-1/3">
            <h1 className="text-lg font-bold pb-4">Browse For Skis Here:</h1>
            <div className="space-y-2">
                {allSkis}
            </div>
        </div>
    )
}
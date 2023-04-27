import SkiTile from "./SkiTile"

export default function SkiListTiles ({ skiData }) {
    const skiTiles = skiData.map((ski) => {
        return <SkiTile key={ski.id} id={ski.id} image={ski.image} brand={ski.brand} name={ski.name} />
    }) 

    return (
        <div className="flex flex-row flex-nowrap space-x-4 overflow-auto">
            {skiTiles}
        </div>
    )
}
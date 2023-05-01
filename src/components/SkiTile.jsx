import NavButton from "./NavButton"

export default function SkiTile ({ id, image, brand, name }) {
    const zoomImg = image.filter((img) => {
        return img.includes('zoom')
    })

    return (
        <div className="inline-block w-1/3 lg:w-1/5 shrink-0 border-2 rounded-lg space-y-4 pt-4 lg:pt-6 overflow-auto relative h-64 lg:h-[26rem]">
            <img src={zoomImg} alt={name} className="w-3/4 block mx-auto"/>
            <h5 className="text-center line-clamp-2 lg:text-lg">{brand} {name}</h5><br/>
            <NavButton linkTo={`/skis/${id}`} buttonText={'See Details'}/>
        </div>
    )
}
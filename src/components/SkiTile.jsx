export default function SkiTile ({ image, brand, name }) {
    const zoomImg = image.filter((img) => {
        return img.includes('zoom')
    })

    return (
        <div className="inline-block w-1/5 shrink-0 border-2 rounded-lg space-y-4 py-4 overflow-auto">
            <img src={zoomImg} alt={name} className="w-3/4 block mx-auto"/>
            <h5 className="text-center">{brand} {name}</h5>
        </div>
    )
}
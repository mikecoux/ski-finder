import NavButton from "./NavButton"

export default function SkiPreview ({ featuredSki }) {
    const { id, brand, name, year, image } = featuredSki

    return (
        <div className="featured-ski basis-2/3 flex flex-col space-y-4">
            <img src={image[0]} alt={name} className="max-h-96 block mx-auto"/>
            <h3 className="block mx-auto">{brand} {name} ({year})</h3>
            <div className="flex flex-row justify-center space-x-2">
                <NavButton linkTo={`/skis/${id}`} buttonText={'See Details'}/>
                <NavButton linkTo={'/skis'} buttonText={'Add to Quiver'}/>
            </div>
        </div>
    )
}
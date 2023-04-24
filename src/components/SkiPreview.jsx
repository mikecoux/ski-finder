import NavButton from "./NavButton"

export default function SkiPreview ({ featuredSki }) {
    const { brand, name, year, image } = featuredSki

    return (
        <div className="featured-ski basis-2/3 flex flex-col space-y-4">
            <img src={image} alt={name} className="max-h-96 w-min block mx-auto"/>
            <h3 className="block mx-auto">{brand} {name} ({year})</h3>
            <div className="flex flex-row justify-center space-x-2">
                <NavButton linkTo={'/'} buttonText={'See More'}/>
                <NavButton linkTo={'/skis'} buttonText={'Add to Quiver'}/>
            </div>
        </div>
    )
}
import NavButton from "./NavButton"

export default function SkiPreview ({ featuredSki }) {
    const { id, brand, name, year, image, content } = featuredSki

    return (
        <div className="basis-2/3 flex flex-row">
            <div className="flex flex-col space-y-8 w-1/2">
                <img src={image[0]} alt={name} className="max-h-96 block mx-auto"/>
                <h3 className="block mx-auto font-bold">{brand} {name} ({year})</h3>
                <div className="flex flex-row justify-center space-x-2">
                    <NavButton linkTo={`/skis/${id}`} buttonText={'See Details'}/>
                    <NavButton linkTo={'/skis'} buttonText={'Add to Quiver'}/>
                </div>
            </div>
            <div className="w-1/2">
                <p className="my-auto italic">{content}</p>
            </div>
        </div>
    )
}
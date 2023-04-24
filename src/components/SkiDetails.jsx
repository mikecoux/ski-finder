export default function SkiDetails ({ featuredSki }) {
    const { brand, name, year, image } = featuredSki

    return (
        <div className="featured-ski basis-2/3">
            <img src={image} alt={name} className="max-h-96"/>
            <h3>{brand} {name}</h3>
            <i><p>{year}</p></i>
        </div>
    )
}
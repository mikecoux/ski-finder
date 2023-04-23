export default function SkiDetails ({ featuredSki }) {
    const { brand, name, year, image } = featuredSki

    return (
        <div className="featured-ski">
            <img src={image} alt={name} />
            <h3>{brand} {name}</h3>
            <i><p>{year}</p></i>
        </div>
    )
}
import { useLoaderData } from "react-router-dom"

export default function DetailPage () {
    const {brand, name, year, image, content, dimensions, lengths, weight} = useLoaderData()

    return (
        <div>
            <img src={image} alt={name} />
            <h3>{brand} {name} ({year})</h3>
            <p>{content}</p>
        </div>
    )
}
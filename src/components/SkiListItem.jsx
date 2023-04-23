export default function SkiListItem ({ ski, onSelectSki }) {
    const { id, brand, name } = ski

    return (
        <div className="ski-list-item" onClick={() => onSelectSki(id)}>
            <h3>{brand} {name}</h3>
        </div>
    )
}
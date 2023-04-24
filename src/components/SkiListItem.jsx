export default function SkiListItem ({ ski, onSelectSki }) {
    const { id, brand, name } = ski

    return (
        <div onClick={() => onSelectSki(id)} className="border-2 rounded-lg w-fit py-1 px-2.5 cursor-pointer hover:bg-slate-200">
            <h3>{brand} {name}</h3>
        </div>
    )
}
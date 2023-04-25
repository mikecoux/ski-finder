import { useLocation } from 'react-router-dom'

export default function QuizResults() {
    const location = useLocation()
    const { moguls, freeride, park, steeps, carving, drops, powder, technical } = location.state.stokeData
    const playfulMatrix = [moguls, carving, technical, park].reduce((a, b) => a + b, 0)
    const performMatrix = [steeps, carving, freeride]
    const rockerMatrix = [freeride, powder, drops]

    return (
        <div>
            <h1>Results</h1>
            <ul>
                <li>Playful: {playfulMatrix}</li>
                <li>Performance: {}</li>
                <li>Rocker: {}</li>
            </ul>
        </div>
    )
}
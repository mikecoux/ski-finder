import { useState } from 'react'

export default function QuizQuestion ({ questionTitle, questionContext, disciplineName, onNext }) {
    const [sliderValue, setSliderValue] = useState(2)

    return (
        <div>
        <h2>{questionTitle}</h2>
        <h3>{questionContext}</h3>
        <form onSubmit={(e) => onNext(e, disciplineName, sliderValue)}>
            <label htmlFor="slider">Stoke</label>
            <input type="range" min="1" max="5" value={sliderValue} id="slider" step="1" list="stokeSettings" name={disciplineName} onChange={(e) => setSliderValue(e.target.value)}/>
            <datalist id="stokeSettings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </datalist>
            <button type="submit">Next</button>
        </form>
    </div>
    )
}
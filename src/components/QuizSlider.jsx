import { useState } from "react"
import { Form } from "react-router-dom"

export default function QuizSlider ({ name }) {
    const [sliderValue, setSliderValue] = useState(2)

    return (
        <Form method="patch" action="/quiz/:user">
            <label htmlFor="slider">Stoke</label>
            <input type="range" min="1" max="5" value={sliderValue} id="slider" step="1" list="stokeSettings" onChange={(e) => setSliderValue(e.target.value)} name={name}/>
            <datalist id="stokeSettings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </datalist>
            <button type="submit">Next</button>
        </Form>
    )
}
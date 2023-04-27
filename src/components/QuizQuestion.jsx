import { useState } from 'react'

export default function QuizQuestion ({ questionTitle, questionContext, disciplineName, onNext }) {
    const [sliderValue, setSliderValue] = useState(2)

    return (
        <div className='space-y-4'>
            <h2 className='text-lg font-bold text-center'>{questionTitle}</h2>
            <h3 className='text-center italic'>{questionContext}</h3>
            <form onSubmit={(e) => onNext(e, disciplineName, sliderValue)}>
                <div className="flex flex-row justify-center space-x-4">
                    <input className="cursor-pointer" type="range" min="1" max="5" value={sliderValue} id="slider" step="1" list="stokeSettings" name={disciplineName} onChange={(e) => setSliderValue(parseInt(e.target.value))}/>
                    <output className='text-lg font-bold'>{sliderValue}</output>
                </div>
                <datalist id="stokeSettings">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </datalist><br/>
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 rounded-full py-1 px-2.5 text-white block mx-auto">Next</button>
            </form>
        </div>
    )
}
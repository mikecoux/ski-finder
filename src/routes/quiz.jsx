import { Form, useSubmit, useParams, useNavigate } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import { useEffect, useState } from "react";

export default function Quiz () {
    const submit = useSubmit()
    const navigate = useNavigate()
    const { user } = useParams()
    const [question, setQuestion] = useState(0)
    const [stokeData, setStokeData] = useState({
        "moguls": '',
        "freeride": '',
        "park": '',
        "steeps": '',
        "technical": '',
        "powder": '',
        "drops": '',
        "carving": ''
    })

    useEffect(() => {
        user ? setQuestion(1) : null
    },[user])

    useEffect(() => {
        question === 9 ? navigate(`/quiz/${user}/results`, {state: { stokeData }}) : null
    },[question])

    function handleSubmit(e) {
        e.preventDefault()
        submit(e.currentTarget.form)
        e.currentTarget.form.reset()
    }

    function handleNext(e, name, value) {
        e.preventDefault()
        setStokeData({
            ...stokeData,
            [name]: value
        })
        setQuestion((question) => {
            return question + 1
        })
    }

    function displayQuestion() {
        switch (question) {
        case 1: 
            return <QuizQuestion questionTitle={'Rate your Moguls stoke:'} questionContext={'Mogul skis are lighter, shorter, and more flexible to make them more maneuverable.'} disciplineName={'moguls'} onNext={handleNext}/>;
        case 2: 
            return <QuizQuestion questionTitle={'Rate your Freeride stoke:'} questionContext={"Freeride skiers usually prefer a playful ski that isn't totally directional, but can still stand up to mixed snow conditions."} disciplineName={'freeride'} onNext={handleNext}/>;
        case 3: 
            return <QuizQuestion questionTitle={'Rate your Park stoke:'} questionContext={"Park skis are narrow, truly twin tip, and well suited to a center mount position. However, they aren't well suited to mixed snow conditions or steep, committing lines."} disciplineName={'park'} onNext={handleNext}/>;
        case 4: 
            return <QuizQuestion questionTitle={'Rate your stoke for Steep & Committing lines:'} questionContext={'Big lines will require a more burly ski that is stiff, directional and well suiting to varied snow types.'} disciplineName={'steeps'} onNext={handleNext}/>;
        case 5: 
            return <QuizQuestion questionTitle={'Rate your stoke for Technical Trees:'} questionContext={'Tight trees necessitate a responsive ski that can turn quickly and is relatively light.'} disciplineName={'technical'} onNext={handleNext}/>;
        case 6: 
            return <QuizQuestion questionTitle={'Rate your Deep Pow stoke:'} questionContext={'Pow skis are fat and rockered. They will help you stay on top of deeper snow, but will be hard to get on edge in hard pack conditions.'} disciplineName={'powder'} onNext={handleNext}/>;
        case 7: 
            return <QuizQuestion questionTitle={'Rate your stoke for Pillows & Cliffs:'} questionContext={'Landing airs will be easier with a fat ski (greater surface area) and one that is less directional as to be more accomodating in case of a backseat landing.'} disciplineName={'drops'} onNext={handleNext}/>;
        case 8: 
            return <QuizQuestion questionTitle={'Rate your Groomer stoke:'} questionContext={'Not joking here. Ripping cord is respectable so long as you are skilled in the other disciplines as well.'} disciplineName={'carving'} onNext={handleNext}/>;
        default:
            null
        }
    }

    return (
        <div>
            <h1>Build Your Profile</h1>
            <Form className={user ? "hidden" : null} method="post" action="/quiz">
                <label htmlFor="userInput">Username:</label>
                <input id="userInput" type="text" placeholder="Enter username here..." name="username" />
                <button type="submit" onClick={handleSubmit}>Next</button>
            </Form>
            {displayQuestion()}
        </div>
    )
}
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

    //Displays first question after a user has entered a username
    useEffect(() => {
        user ? setQuestion(1) : null
    },[user])

    //Redirects user to results page when they complete the quiz and sends data through
    useEffect(() => {
        question === 9 ? navigate(`/quiz/${user}/results`, {state: { stokeData }}) : null
    },[question])

    //Submits the entered username to the router
    function handleSubmit(e) {
        e.preventDefault()
        submit(e.currentTarget.form)
        e.currentTarget.form.reset()
    }

    //Updates form state and advances question when user clicks next
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

    //shows the progress bar
    function showProgressBar() {
        if(question === 0) {
            return ' hidden'
        } else {
            return ''
        }
    }

    //advances the progress bar
    function progressBar() {
        switch (question) {
            case 1:
                return ' w-[12.5%]'
            case 2:
                return ' w-[25%]'
            case 3:
                return ' w-[37.5%]'
            case 4:
                return ' w-[50%]'
            case 5:
                return ' w-[62.5%]'
            case 6:
                return ' w-[75%]'
            case 7:
                return ' w-[87.5%]'
            case 8:
                return ' w-full'
            default:
                return null
        }
    }

    //Switch statement displays a question depending on current state
    function displayQuestion() {
        switch (question) {
        case 1: 
            return <QuizQuestion questionTitle={'Rate your Moguls stoke:'} questionContext={'Mogul skis are lighter, shorter, and more flexible to make them more maneuverable.'} disciplineName={'moguls'} onNext={handleNext} buttonText={'Next'}/>;
        case 2: 
            return <QuizQuestion questionTitle={'Rate your Freeride stoke:'} questionContext={"Freeride skiers usually prefer a playful ski that isn't totally directional, but can still stand up to mixed snow conditions."} disciplineName={'freeride'} onNext={handleNext} buttonText={'Next'}/>;
        case 3: 
            return <QuizQuestion questionTitle={'Rate your Park stoke:'} questionContext={"Park skis are narrow, truly twin tip, and well suited to a center mount position. However, they aren't well suited to mixed snow conditions or steep, committing lines."} disciplineName={'park'} onNext={handleNext} buttonText={'Next'}/>;
        case 4: 
            return <QuizQuestion questionTitle={'Rate your stoke for Steep & Committing lines:'} questionContext={'Big lines will require a more burly ski that is stiff, directional and well suiting to varied snow types.'} disciplineName={'steeps'} onNext={handleNext} buttonText={'Next'}/>;
        case 5: 
            return <QuizQuestion questionTitle={'Rate your stoke for Technical Trees:'} questionContext={'Tight trees necessitate a responsive ski that can turn quickly and is relatively light.'} disciplineName={'technical'} onNext={handleNext} buttonText={'Next'}/>;
        case 6: 
            return <QuizQuestion questionTitle={'Rate your Deep Pow stoke:'} questionContext={'Pow skis are fat and rockered. They will help you stay on top of deeper snow, but will be hard to get on edge in hard pack conditions.'} disciplineName={'powder'} onNext={handleNext} buttonText={'Next'}/>;
        case 7: 
            return <QuizQuestion questionTitle={'Rate your stoke for Pillows & Cliffs:'} questionContext={'Landing airs will be easier with a fat ski (greater surface area) and one that is less directional as to be more accomodating in case of a backseat landing.'} disciplineName={'drops'} onNext={handleNext} buttonText={'Next'}/>;
        case 8: 
            return <QuizQuestion questionTitle={'Rate your Groomer stoke:'} questionContext={'Not joking here. Ripping cord is respectable so long as you are skilled in the other disciplines as well.'} disciplineName={'carving'} onNext={handleNext} buttonText={'Finish'}/>;
        default:
            null
        }
    }

    return (
        <div className="flex flex-column justify-center">
            <div className="w-1/3">
                <div className={"border-2 border-slate-200 w-1/3 h-4 rounded-lg mt-8 relative mx-auto" + showProgressBar()}>
                    <div className={"bg-sky-400 h-full rounded-lg absolute top-0 left-0" + progressBar()}></div>
                </div>
                <div className="my-4 border-2 rounded-lg space-y-4 p-8">
                    <Form className={user ? "hidden" : null} method="post" action="/quiz">
                        <label htmlFor="userInput" className="block mx-auto text-lg font-bold text-center">Enter Username:</label><br/>
                        <input id="userInput" type="text" placeholder="Type here..." name="username" className="block mx-auto text-center"/><br/>
                        <button type="submit" onClick={handleSubmit} className="bg-sky-500 hover:bg-sky-700 rounded-full py-1 px-2.5 text-white block mx-auto">Next</button>
                    </Form>
                    {/* Would be cool to figure out resetting state if user clicks the back button */}
                    {displayQuestion()}
                </div>
            </div>
        </div>
    )
}
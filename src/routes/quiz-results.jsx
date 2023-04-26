import { useLocation } from 'react-router-dom'
import { matrix, multiply } from 'mathjs'
import QuizChart from '../components/QuizChart'

export default function QuizResults() {
    const location = useLocation()
    const { moguls, freeride, park, steeps, carving, drops, powder, technical } = location.state.stokeData

    //Schema for Matrix A
    /*
                    moguls  freeride  park  steeps  carving  drops  powder  technical
        playfulness                                                        
        performance                      
        rocker                                          
    */
    
    const mA = matrix(
        [
            [4, 3, 5, 2, 1, 4, 3, 3],
            [2, 4, 1, 5, 5, 3, 3, 2],
            [2, 4, 3, 3, 1, 4, 5, 3]
        ]
    )

    // Matrix B is comprised of the user inputs
    const mB = matrix(
        [
            [moguls],
            [freeride],
            [park],
            [steeps],
            [carving],
            [drops],
            [powder],
            [technical]
        ]
    )

    // const mB = matrix (
    //     [
    //         [1],
    //         [1],
    //         [0],
    //         [1],
    //         [0],
    //         [1],
    //         [1],
    //         [0]
    //     ]
    // )

    const mC = multiply(mA, mB)
    const total = (parseInt(mC._data[0]) + parseInt(mC._data[1]) + parseInt(mC._data[2]))
    const playfulness = (parseInt(mC._data[0]) / total)
    const performance = (parseInt(mC._data[1]) / total)
    const rocker = (parseInt(mC._data[2]) / total)

    return (
        <div>
            <h1>Results</h1>
            <div className='w-1/2'>
                <QuizChart data={[playfulness, performance, rocker]}/>
            </div>
        </div>
    )
}
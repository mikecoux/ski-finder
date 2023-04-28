import { useLocation, useParams, useLoaderData } from 'react-router-dom'
import { matrix, multiply } from 'mathjs'
import QuizChart from '../components/QuizChart'
import { useEffect } from 'react'
import RecommendedSkis from '../components/RecommendedSkis'

export default function QuizResults() {
    const location = useLocation()
    const { user } = useParams()
    const userData = useLoaderData()
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
            [5, 7, 10, 2, 1, 2, 2, 3],
            [8, 3, 1, 10, 10, 8, 2, 7],
            [2, 6, 3, 4, 2, 4, 10, 3]
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

    //Calculting the stoke profile
    const mC = multiply(mA, mB)
    const total = (parseInt(mC._data[0]) + parseInt(mC._data[1]) + parseInt(mC._data[2]))
    const playRatio = (parseInt(mC._data[0]) / total)
    const perfRatio = (parseInt(mC._data[1]) / total)
    const rockRatio = (parseInt(mC._data[2]) / total)

    //Creating objects for CRUD
    const userStokeObj = {
        playfulness: playRatio,
        performance: perfRatio,
        rocker: rockRatio
    }
    const userObj = {
        username: user,
        stokeProfile: userStokeObj
    }

    //CRUD functions
    function newUser() {
        fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
    }

    function updateUser (id) {
        fetch(`${import.meta.env.VITE_APP_API_URL}/users/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userObj)
        })
    }

    //POST's or PATCH's depending on whether the username exists or not
    useEffect(() => {
        let filteredUsers = userData.filter(skier => skier.username === user )
        if (filteredUsers.length !== 0) {
            let userId = filteredUsers[0].id
            updateUser(userId)
        } else {
            newUser()
        }
    }, [])

    return (
        <div className='w-4/5 block mx-auto my-8'>
            <h1 className='text-center text-3xl font-bold'>{user.charAt(0).toUpperCase() + user.slice(1) + "'s " + "Stoke Profile"}:</h1>
            <div className='space-y-4 h-screen'>
                <QuizChart data={userStokeObj}/>
                <div className='space-y-4'>
                    <h3 className='text-center font-bold'>These skis match your stoke:</h3>
                    <RecommendedSkis userData={userStokeObj}/>
                </div>
            </div>
        </div>
    )
}
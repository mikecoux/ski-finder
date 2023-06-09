import { useRouteLoaderData } from "react-router-dom"
import { matrix, subtract, square, map, squeeze } from 'mathjs'
import SkiListTiles from "./SkiListTiles"

export default function RecommendedSkis ({ userData }) {
    const skiData = useRouteLoaderData("root")
    
    //turn userData into matrix
    const userMatrix = matrix(
        [
            [userData.playfulness],
            [userData.performance],
            [userData.rocker]
        ]
    )

    console.log('4) Normalized Matrix C: ' + userMatrix)

    //create empty array
    const sumOfSquares = []

    //map through the ski data and push to the empty array
    skiData.map((ski) => {
        //turn each ski stokeProfile into matrix
        const skiMatrix = matrix(
            [
                [ski.stokeProfile.playfulness],
                [ski.stokeProfile.performance],
                [ski.stokeProfile.rocker]
            ]
        )
        console.log(`5) Create a matrix for each ski from the stoke profile: ${ski.name} - ${skiMatrix}`)
        //subtract, square the matrices, and then find the sum of their entries
        const step1 = subtract(userMatrix, skiMatrix)
        const step2 = squeeze(step1._data)
        const step3 = map(step2, square)
        const result = step3.reduce((a, b) => a + b, 0)
        console.log(`6) Subtract ski matrix from user matrix, square result, add the entries: ${ski.name} - ${result}`)

        //populate external array
        return sumOfSquares.push(
            [ski.id, result]
        )
    })

    //sort external array by lowest sum of squares
    //take the top 3 and push their skiIDs to a new array
    const top3 = []
    top3.push(sumOfSquares.sort((a, b) => a[1]-b[1]).slice(0,3).map(sum => sum[0]))

    //pass top 3 results to skiListTiles component
    const top3Skis = skiData.filter((ski) => {
        console.log('7) Recommend top 3 skis (by lowest SoS): ' + ski.name + ' - ' + top3[0].includes(ski.id))
        return top3[0].includes(ski.id)
    })

    return (
        <SkiListTiles skiData={top3Skis} />
    )
}
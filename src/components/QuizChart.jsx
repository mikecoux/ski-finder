import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js';
import { Pie } from "react-chartjs-2"

Chart.register(CategoryScale);

export default function QuizChart ({ data }) {
    const chartData = {
        labels: ['Playfulness', 'Performance', 'Rocker'],
        datasets: [
            {
              label: 'Stoke Profile',
              data: [data.playfulness, data.performance, data.rocker],
              backgroundColor: [
                '#092327',
                '#00A9A5',
                '#90C2E7',
              ],
              borderColor: "black",
              borderWidth: 2,
            }
        ]
    }

    return (
        <div className='h-1/2'>
        <Pie
            data={chartData}
            options={{
            plugins: {
                title: {
                display: true,
                }
            }
            }}
            className='h-full block mx-auto'
        />
        </div>
    )
}
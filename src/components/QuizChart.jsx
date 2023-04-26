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
              data: [data[0], data[1], data[2]],
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
        <Pie
            data={chartData}
            options={{
            plugins: {
                title: {
                display: true,
                text: "Stoke Profile"
                }
            }
            }}
        />
    )
}
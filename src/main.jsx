import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './routes/home.jsx'
import Browse from './routes/browse.jsx'
import Quiz from './routes/quiz'
import './index.css'
import DetailPage from './routes/detail-page.jsx'
import QuizQuestion from './components/QuizQuestion.jsx'

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/skis',
        element: <Browse />,
        loader: async () => {
          return fetch('http://localhost:3000/skis');
        },
      },
      {
        path: '/skis/:skiId',
        element: <DetailPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/skis/${params.skiId}`);
        },
      },
      {
        path: '/quiz',
        element: <Quiz />,
        action: async ({ request }) => {
          let formData = await request.formData();
          let formSubmission = Object.fromEntries(formData)
          // console.log(formSubmission)
          return redirect(`/quiz/${formSubmission.username}`)
          // let formSubmission = {
          //   username: formData.get("username")
          // }
          // return fetch('http://localhost:3000/users', {
          //   method: 'POST',
          //   headers: {'Content-Type': 'application/json'},
          //   body: JSON.stringify(formSubmission)
          // })
        }
      },
      {
        path: '/quiz/:user',
        element: <Quiz />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

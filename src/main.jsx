import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './routes/home.jsx'
import Browse from './routes/browse.jsx'
import Quiz from './routes/quiz'
import './index.css'

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
        path: '/quiz',
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

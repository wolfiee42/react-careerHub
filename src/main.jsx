import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/JObs/Jobs.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Roots from './Roots/Roots.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

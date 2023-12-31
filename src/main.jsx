import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/Appliedjobs/AppliedJobs';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:'',
        element: <Home></Home>
      },
      {
        path:'statictics',
        element:<Statistics></Statistics>
      },
      {
        path:'appliedjobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

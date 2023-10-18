import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import Shop from './components/Shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/shop')
      },
      {
        path: '/addnewproduct',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateproduct',
        element: <UpdateCoffee></UpdateCoffee>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

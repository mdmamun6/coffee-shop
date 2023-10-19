import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx';
import AddProducts from './components/AddProducts/AddProducts.jsx';
import UpdateProducts from './components/UpdateProducts/UpdateProducts.jsx';
import Brands from './components/Brands/Brands.jsx';
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
        path: '/brand/:brandName',
        element: <Brands></Brands>,
      },
      {
        path: '/addnewproduct',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/products/:id',
        element: <UpdateProducts></UpdateProducts>,
        loader: ({params}) => fetch(`http://localhost:5173/updateproduct/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

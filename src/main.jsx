import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Class from './Components/Class/Class.jsx';
import Fee from './Components/Fee/Fee.jsx';

import ClassAndRoll from './Components/ClassAndRoll/ClassAndRoll.jsx';
import DifferentClass from './Components/DifferentClass/DifferentClass.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() =>fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>

  },
  {
    path:'/class',
    element:<Class></Class>,
  
  },
  {
    path:'/fee',
    element:<Fee></Fee>

  },
  {
    path:'/menu',
    element:<ClassAndRoll></ClassAndRoll>

  },
  {
    path:'/different',
    element:<DifferentClass></DifferentClass>

  },
  {
    path:"/updateCoffee",
    element:<UpdateCoffee></UpdateCoffee>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

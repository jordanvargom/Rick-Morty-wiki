import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Home from './components/Home/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={App}/>
  </React.StrictMode>,
)

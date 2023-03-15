import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './components/Home/home'
import Character from './components/Character/character'
const App = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: '/character',
      element: <Character/>
    }
  ]
}])

export default App

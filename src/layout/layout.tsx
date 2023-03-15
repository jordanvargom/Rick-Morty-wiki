import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/nav'

const Layout = () => {
  return (
    <main>
      <Nav/>
      <Outlet />
    </main>
  )
}

export default Layout

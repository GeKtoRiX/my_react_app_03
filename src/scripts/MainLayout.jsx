import { Outlet } from 'react-router'
import NavBar from './components/BookList/NavBar'
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout

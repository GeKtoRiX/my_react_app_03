import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/Home'}>Home</NavLink>
      <NavLink to={'/Books'}>Books</NavLink>
      <NavLink to={'/About'}>About</NavLink>
    </nav>
  )
}

export default NavBar

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/Home'}>Home</NavLink>
      <NavLink to={'/Books'}>Books</NavLink>
      <NavLink to={'/UseState'}>useState</NavLink>
      <NavLink to={'/UseEffect'}>useEffect</NavLink>
       <NavLink to={'/BirthdayReminder'}>BirthdayReminder</NavLink>
      <NavLink to={'/About'}>About</NavLink>
    </nav>
  );
};

export default NavBar;

import { Outlet } from 'react-router';
import NavBar from './NavBar';
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;

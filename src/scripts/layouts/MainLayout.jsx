import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      {/* Меню сайта */}
      <Outlet />
    </>
  );
};

export default MainLayout;

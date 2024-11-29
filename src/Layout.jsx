import { Outlet, useLocation } from "react-router-dom";
import Navber from "./Pages/Shared/Navber/Navber";
import Footer from "./Pages/Shared/Footer/Footer";


const Layout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  return (
    <>
    {!isDashboardRoute && <Navber />}
    <Outlet />
    {!isDashboardRoute && <Footer />}
  </>
  );
};

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
// import Navber from "./Pages/Shared/Navber/Navber";
import Footer from "./Pages/Shared/Footer/Footer";
import AllNavber from "./Pages/Shared/Navber/AllNavber";

const Layout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      {!isDashboardRoute && !isHomeRoute && <AllNavber />}
      <Outlet />
      {!isDashboardRoute && <Footer />}
    </>
  );
};

export default Layout;

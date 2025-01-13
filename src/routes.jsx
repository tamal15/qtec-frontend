import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";



// import ProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/ProjectHome";
// import EditProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/EditProjectHome";


import Login from "./Pages/Shared/Login/Login";
import PrivetRoute from "./Pages/Shared/PrivetRoute/PrivetRoute";

import ErrorPage from "./Pages/Shared/Errorpage";
import Layout from "./Layout";
import FormPage from "./Pages/FormPage/FormPage";
import Categoryspart from "./Pages/HomePage/CategoryPart/Categoryspart";
import CategoryDetails from "./Pages/HomePage/CategoryPart/CategoryDetails";
import Signup from "./Pages/Shared/Signup/Signup";
import ViewChat from "./Pages/ChatPart/ViewChat/ViewChat";
import Home from "./Pages/HomePage/Home/Home";
import AccountDetails from "./Pages/AccountDetails/AccountDetails";
import PostAdPage from "./Pages/AccountDetails/PostAdPage";
import ContactUs from "./Pages/AccountDetails/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <>
       <ErrorPage/>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/uploadcategory",
        element: <FormPage />,
      },
      {
        path: "/accounts",
        element: <AccountDetails />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/postadpages",
        element: <PostAdPage />,
      },
      
     
      {
        path: "/categoryspart",
        element: <Categoryspart />,
      },
      {
        path: "/viewchats",
        element: <ViewChat />,
      },
      // {
      //   path: "/category/:catego",
      //   element: <Categorynewpart />,
      // },
      
      {
        path: "//category/:category",
        element: <CategoryDetails />,
      },
     

        ],
      },



      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },

      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
           </PrivetRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />,
          },
         
    
    ],
  },
]);
export default router;

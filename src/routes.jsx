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
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import UserAllData from "./Pages/Dashboard/UserAllData/UserAllData";
import PendingProduct from "./Pages/Dashboard/PendingProduct/PendingProduct";
import BoostAdPage from "./Pages/AccountDetails/AddsShow/BoostAdPage";
import UpdatePackage from "./Pages/Dashboard/UpdatePackage/UpdatePackage";
import LocationSelector from "./Pages/LocationSelector/LocationSelector";
import AllAds from "./Pages/AllAds/AllAds";
import BannerPost from "./Pages/Dashboard/BannerPost/BannerPost";
import EditBanners from "./Pages/Dashboard/BannerPost/EditBanners";
import SellFast from "./Pages/HomePage/SellFast/SellFast";
import MemberShip from "./Pages/FormPage/MemberShip/MemberShip";
import AllProductShow from "./Pages/Dashboard/AllProductShow/AllProductShow";
import AboutWhy from "./Pages/HomePage/AboutWhy/AboutWhy";
import Phone from "./Pages/HomePage/Phone/Phone";


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
        element: 
        <PrivetRoute>
          <AccountDetails />
        </PrivetRoute>
       
      },
      {
        path:"/boost-ad/:productId",
        element: <BoostAdPage />,
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
        path: "/allads",
        element: <AllAds />,
      },
      
     
      {
        path: "/categoryspart",
        element: <Categoryspart />,
      },
      {
        path: "/viewchats",
        element: 
        <PrivetRoute>
          <ViewChat />
        </PrivetRoute>
       
      },
      {
        path: "/location",
        element: <LocationSelector />,
      },
      {
        path: "/sellfast",
        element: <SellFast />,
      },
      {
        path: "/membership",
        element: <MemberShip />,
      },
      {
        path: "/phone",
        element: <Phone />,
      },
      {
        path: "/aboutwhy",
        element: <AboutWhy />,
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
          {
            path: "/dashboard/makeadmin",
            element: <MakeAdmin />,
          },
          {
            path: "/dashboard/useralldata",
            element: <UserAllData />,
          },
          {
            path: "/dashboard/pendingproduct",
            element: <PendingProduct />,
          },
          {
            path: "/dashboard/allproductshows",
            element: <AllProductShow />,
          },
          {
            path: "/dashboard/updatepackage",
            element: <UpdatePackage />,
          },
          {
            path: "/dashboard/bannerpost",
            element: <BannerPost />,
          },
          {
            path: "/dashboard/editbanners/:id",
            element: <EditBanners/>,
          },
         
    
    ],
  },
]);
export default router;

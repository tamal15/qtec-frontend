import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";



// import ProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/ProjectHome";
// import EditProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/EditProjectHome";


import Login from "./Pages/Shared/Login/Login";
// import PrivetRoute from "./Pages/Shared/PrivetRoute/PrivetRoute";

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
import EditProductCard from "./Pages/AccountDetails/AddsShow/EditProductCard";
import AddsBanner from "./Pages/HomePage/AddsBanner/AddsBanner";
import BoostAdds from "./Pages/HomePage/BoostAdds/BoostAdds";
import AboutPart from "./Pages/HomePage/AboutPart/AboutPart";
import TermCondition from "./Pages/HomePage/TermCondition/TermCondition";
import PrivacyPolicy from "./Pages/HomePage/PrivacyPolicy/PrivacyPolicy";
import PrivetRoute from "./Pages/Shared/PrivetRoute/PrivetRoute";
import SubAdmin from "./Pages/Dashboard/MakeAdmin/SubAdmin/SubAdmin";
import JobFormPage from "./Pages/FormPage/JobFormPage";
import PrivateRoute from "./Pages/Shared/PrivetRoute/PrivetRoute";


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
        element: 
        <PrivetRoute>
         <FormPage />
        </PrivetRoute>
        
      },
      {
        path: "/accounts",
        element: 
        // <PrivetRoute>
          <AccountDetails />
        // </PrivetRoute>
       
      },
      {
        path:"/boost-ad/:productId",
        element: <BoostAdPage />,
      },
      {
        path:"/editproductcard/:id",
        element: <EditProductCard />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      // {
      //   path: "/banneradds",
      //   element: <Bannerads />,
      // },
      {
        path: "/postadpages",
        element: 
        <PrivateRoute>
         <PostAdPage />
        </PrivateRoute>
        
      },
      {
        path: "/allads",
        element: <AllAds />,
      },
      {
        path: "/addsbanners",
        element: <AddsBanner />,
      },
      {
        path: "/aboutsparts",
        element: <AboutPart />,
      },
      {
        path: "/postjobpage",
        element: <JobFormPage />,
      },
      {
        path: "/termcondition",
        element: <TermCondition />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/boostadds",
        element: <BoostAdds />,
      },
      {
        path: "/pendingproduct",
        element: <PendingProduct />,
      },
      
     
      {
        path: "/categoryspart",
        element: <Categoryspart />,
      },
      {
        path: "/viewchats",
        element: 
        // <PrivetRoute>
          <ViewChat />
        // </PrivetRoute>
       
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
        path: "/category/:category",
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
          // <PrivetRoute>
            <Dashboard />
          // </PrivetRoute>
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
            path: "/dashboard/subadmin",
            element: <SubAdmin />,
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

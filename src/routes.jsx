import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/HomePages/Home";
import AboutAward from "./Pages/AboutPages/AboutAward/AboutAward";
import AboutClientele from "./Pages/AboutPages/AboutClientele/AboutClientele";
import AboutRecruitment from "./Pages/AboutPages/AboutRecruitment/AboutRecruitment";
import AboutTestimonials from "./Pages/AboutPages/AboutTestimonials/AboutTestimonials";
import Service from "./Pages/Services/Service";
import Career from "./Pages/CareersPages/Career";
import Event from "./Pages/EventPages/Event";
import Media from "./Pages/EventPages/MediaPage/Media";
import Contact from "./Pages/ContactPages/Contact";
import Blog from "./Pages/BlogPages/Blog";
import AboutUs from "./Pages/AboutPages/AboutUs/AboutUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import HomeBanner from "./Pages/Dashboard/HomeDashboard/HomeBanner/HomeBanner";
import EditHomeBanner from "./Pages/Dashboard/HomeDashboard/HomeBanner/EditHomeBanner";
import HomeAboutUs from "./Pages/Dashboard/HomeDashboard/HomeAboutUs/HomeAboutUs";
import EditHomeAboutus from "./Pages/Dashboard/HomeDashboard/HomeAboutUs/EditHomeAboutus";
import ServiceHome from "./Pages/Dashboard/HomeDashboard/ServiceHome/ServiceHome";
import EditServiceHome from "./Pages/Dashboard/HomeDashboard/ServiceHome/EditServiceHome";
import ProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/ProjectHome";
import EditProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/EditProjectHome";
import AwardClient from "./Pages/Dashboard/HomeDashboard/AwardClient/AwardClient";
import EditAwardClient from "./Pages/Dashboard/HomeDashboard/AwardClient/EditAwardClient";
import TestimonialHome from "./Pages/Dashboard/HomeDashboard/TestimonialHome/TestimonialHome";
import EditTestimonialHome from "./Pages/Dashboard/HomeDashboard/TestimonialHome/EditTestimonialHome";
import BannerService from "./Pages/Dashboard/ServiceDashboard/BannerService/BannerService";
import EditServiceBanner from "./Pages/Services/ServiceBanner/EditServiceBanner";
import ServiceHr from "./Pages/Dashboard/ServiceDashboard/ServiceHr/ServiceHr";
import EditServiceHr from "./Pages/Dashboard/ServiceDashboard/ServiceHr/EditServiceHr";
import AdminService from "./Pages/Dashboard/ServiceDashboard/AdminService/AdminService";
import EditAdminService from "./Pages/Dashboard/ServiceDashboard/AdminService/EditAdminService";
import EmployeeService from "./Pages/Dashboard/ServiceDashboard/EmployeeService/EmployeeService";
import EditEmployeeService from "./Pages/Dashboard/ServiceDashboard/EmployeeService/EditEmployeeService";
import ManagementService from "./Pages/Dashboard/ServiceDashboard/ManagementService/ManagementService";
import EditManagement from "./Pages/Dashboard/ServiceDashboard/ManagementService/Editmanagement";
import BannerCareer from "./Pages/Dashboard/CareerDashboard/BannerCareer/BannerCareer";
import EditCareerBanner from "./Pages/Dashboard/CareerDashboard/BannerCareer/EditCareerBanner";
import WorkCareer from "./Pages/Dashboard/CareerDashboard/WorkCareer/WorkCareer";
import EditWorkCareer from "./Pages/Dashboard/CareerDashboard/WorkCareer/EditWorkCareer";
import CareerDetails from "./Pages/CareersPages/CareerWork/CareerDetails";
import GlobalCareer from "./Pages/Dashboard/CareerDashboard/GlobalCareer/GlobalCareer";
import EditGlobalCareer from "./Pages/Dashboard/CareerDashboard/GlobalCareer/EditGlobalCareer";
import DetailCareer from "./Pages/Dashboard/CareerDashboard/GlobalCareer/DetailCareer";
import ContactTeam from "./Pages/Dashboard/ContactDashboard/ContactTeam/ContactTeam";
import EditContactTeam from "./Pages/Dashboard/ContactDashboard/ContactTeam/EditContactTeam";
import CareEventBanner from "./Pages/Dashboard/EventCareDashboard/CareEventBanner/CareEventBanner";
import EditCareEventBanner from "./Pages/Dashboard/EventCareDashboard/CareEventBanner/EditCareEventBanner";
import VideoCare from "./Pages/Dashboard/EventCareDashboard/VideoCare/VideoCare";
import EditVideoCare from "./Pages/Dashboard/EventCareDashboard/VideoCare/EditVideoCare";
import EventMedia from "./Pages/Dashboard/EventCareDashboard/EventMedia/EventMedia";
import EditEventmedia from "./Pages/Dashboard/EventCareDashboard/EventMedia/EditEventmedia";
import GalleryMedia from "./Pages/Dashboard/EventCareDashboard/EventMedia/GalleryMedia";
import EditGalleryMedia from "./Pages/Dashboard/EventCareDashboard/EventMedia/EditGalleryMedia";
import BlogPart from "./Pages/Dashboard/BlogDashboard/BlogPart/BlogPart";
import EditBlogpart from "./Pages/Dashboard/BlogDashboard/BlogPart/EditBlogpart";
import DetailBlog from "./Pages/Dashboard/BlogDashboard/BlogPart/DetailBlog";
import BannerRecruitment from "./Pages/Dashboard/AboutDashboard/RecruitmentBanner/BannerRecruitment";
import EditBannerRecruitment from "./Pages/Dashboard/AboutDashboard/RecruitmentBanner/EditBannerRecruitment";
import RecruitmentProcessTime from "./Pages/Dashboard/AboutDashboard/RecruitmentProcess/RecruitmentProcessTime";
import EditProcessTimeline from "./Pages/Dashboard/AboutDashboard/RecruitmentProcess/EditProcessTimeline";
import BannerTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/BannerTestimonial/BannerTestimonial";
import EditBannerTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/BannerTestimonial/EditbannerTestimonial";
import GroupTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/GroupTestimonial/GroupTestimonial";
import EditGroupTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/GroupTestimonial/EditGroupTestimonial";
import ClientTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/ClientTestimonial/ClientTestimonial";
import EditClientTestimonial from "./Pages/Dashboard/AboutDashboard/AboutTestimonial/ClientTestimonial/EditClientTestimonial";
import WhyAboutUs from "./Pages/Dashboard/AboutDashboard/AboutUs/WhyAboutUs/WhyAboutUs";
import EditAboutwhyus from "./Pages/Dashboard/AboutDashboard/AboutUs/WhyAboutUs/EditAboutwhyus";
import MemberBoard from "./Pages/Dashboard/AboutDashboard/AboutUs/MemberBoard/MemberBoard";
import EditMember from "./Pages/Dashboard/AboutDashboard/AboutUs/MemberBoard/EditMember";
import EditMemberTeam from "./Pages/Dashboard/AboutDashboard/AboutUs/MemberTeam/EditMemberTeam";
import MemberTeam from "./Pages/Dashboard/AboutDashboard/AboutUs/MemberTeam/MemberTeam";
import AwardCard from "./Pages/AboutPages/AboutUs/AwardAbout/AwardCard/AwardCard";
import EditAwardCard from "./Pages/AboutPages/AboutUs/AwardAbout/AwardCard/EditAwardCard";
import AwardsClients from "./Pages/AboutPages/AboutUs/AwardAbout/AwardClient/AwardsClients";
import EditAwardsClients from "./Pages/AboutPages/AboutUs/AwardAbout/AwardClient/EditAwardsClients";
import StatusAward from "./Pages/AboutPages/AboutUs/AwardAbout/AwardStatus/StatusAward";
import EditStatusAward from "./Pages/AboutPages/AboutUs/AwardAbout/AwardStatus/EditStatusAward";
import ClienteteAbouts from "./Pages/Dashboard/AboutDashboard/ClienteteAbouts/ClienteteAbouts";
import EditClienteteAbout from "./Pages/Dashboard/AboutDashboard/ClienteteAbouts/EditClienteteAbout";
import ClientKSA from "./Pages/Dashboard/AboutDashboard/ClienteteAbouts/ClientKSA";
import EditClientKSA from "./Pages/Dashboard/AboutDashboard/ClienteteAbouts/EditClientKSA";
import ClienteteAboutUAE from "./Pages/Dashboard/AboutDashboard/ClienteteAboutUAE/ClienteteAboutUAE";
import EditClientUAE from "./Pages/Dashboard/AboutDashboard/ClienteteAboutUAE/EditClientUAE";
import CategoryUAE from "./Pages/Dashboard/AboutDashboard/ClienteteAboutUAE/CategoryUAE";
import EditCategoryUAE from "./Pages/Dashboard/AboutDashboard/ClienteteAboutUAE/EditCategoryUAE";
import ClientaboutsQATAR from "./Pages/Dashboard/AboutDashboard/ClientaboutsQATAR/ClientaboutsQATAR";
import Editclientqatar from "./Pages/Dashboard/AboutDashboard/ClientaboutsQATAR/Editclientqatar";
import CategoryQatar from "./Pages/Dashboard/AboutDashboard/ClientaboutsQATAR/CategoryQatar";
import EditCategoryqatar from "./Pages/Dashboard/AboutDashboard/ClientaboutsQATAR/EditCategoryqatar";
import CategoryKuwaits from "./Pages/Dashboard/AboutDashboard/Clienteteaboutskuwaits/Categorykuwaits";
import EditCategoryskuwaits from "./Pages/Dashboard/AboutDashboard/Clienteteaboutskuwaits/EdirCategoryskuwaits";
import Login from "./Pages/Shared/Login/Login";
import PrivetRoute from "./Pages/Shared/PrivetRoute/PrivetRoute";
import Signup from "./Pages/Shared/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <>
        <h2>400</h2>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/award",
        element: <AboutAward />,
      },
      {
        path: "/aboutclientele",
        element: <AboutClientele />,
      },
      {
        path: "/aboutrecruitment",
        element: <AboutRecruitment />,
      },
      {
        path: "/aboutTestimonial",
        element: <AboutTestimonials />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "careerDetails/:id",
        element: <CareerDetails />,
      },
      {
        path: "globalcareerDetails/:id",
        element: <DetailCareer />,
      },
      {
        path: "blogDetails/:id",
        element: <DetailBlog />,
      },
      // {
      //   path:"/career/details/:id",
      //   element:<CareerDetails jobs={jobs} />,
      // },
      {
        path: "/eventcare",
        element: <Event />,
      },
      {
        path: "/eventmedia",
        element: <Media />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/blogpage",
        element: <Blog />,
      },
      {
        path: "/aboutuspage",
        element: <AboutUs />,
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
            path: "/dashboard/homebanner",
            element: <HomeBanner />,
          },
          {
            path: "/dashboard/homeaboutus",
            element: <HomeAboutUs />,
          },
          {
            path: "/dashboard/serviceshome",
            element: <ServiceHome />,
          },
          {
            path: "/dashboard/projectshome",
            element: <ProjectHome />,
          },
          {
            path: "/dashboard/awardclient",
            element: <AwardClient />,
          },
          {
            path: "/dashboard/testimonalhome",
            element: <TestimonialHome />,
          },
          {
            path: "/dashboard/bannerservice",
            element: <BannerService />,
          },
          {
            path: "/dashboard/serviceHr",
            element: <ServiceHr />,
          },
          {
            path: "/dashboard/serviceadmins",
            element: <AdminService />,
          },
          {
            path: "/dashboard/employeeservices",
            element: <EmployeeService />,
          },
          {
            path: "/dashboard/managementservices",
            element: <ManagementService />,
          },
          {
            path: "/dashboard/bannercareers",
            element: <BannerCareer />,
          },
          {
            path: "/dashboard/workcareers",
            element: <WorkCareer />,
          },
          {
            path: "/dashboard/globalcareers",
            element: <GlobalCareer />,
          },
          {
            path: "/dashboard/contactTeam",
            element: <ContactTeam />,
          },
          {
            path: "/dashboard/careecentbanner",
            element: <CareEventBanner />,
          },
          {
            path: "/dashboard/videocares",
            element: <VideoCare />,
          },
          {
            path: "/dashboard/eventmedia",
            element: <EventMedia />,
          },
          {
            path: "/dashboard/gallerymedia",
            element: <GalleryMedia />,
          },
          {
            path: "/dashboard/blogpart",
            element: <BlogPart />,
          },
          {
            path: "/dashboard/recruitmentbanners",
            element: <BannerRecruitment />,
          },
          {
            path: "/dashboard/recruitmentprocesstime",
            element: <RecruitmentProcessTime />,
          },
          {
            path: "/dashboard/bannertestimonials",
            element: <BannerTestimonial />,
          },
          {
            path: "/dashboard/grouptestimonial",
            element: <GroupTestimonial />,
          },
          {
            path: "/dashboard/clienttestimonial",
            element: <ClientTestimonial />,
          },
          {
            path: "/dashboard/whyaboutus",
            element: <WhyAboutUs />,
          },
          {
            path: "/dashboard/addmemberboard",
            element: <MemberBoard />,
          },
          {
            path: "/dashboard/addmemberteam",
            element: <MemberTeam />,
          },
          
          {
            path: "/dashboard/awardcard",
            element: <AwardCard />,
          },
          {
            path: "/dashboard/awardsclients",
            element: <AwardsClients />,
          },
          {
            path: "/dashboard/statusawards",
            element: <StatusAward />,
          },
          {
            path: "/dashboard/clienteteaboutus",
            element: <ClienteteAbouts />,
          },
          {
            path: "/dashboard/clienteteaboutksa",
            element: <ClientKSA />,
          },
          {
            path: "/dashboard/clienteteaboutuae",
            element: <ClienteteAboutUAE />,
          },
          {
            path: "/dashboard/clientcategoryuae",
            element: <CategoryUAE />,
          },
          {
            path: "/dashboard/clientaboutsqatars",
            element: <ClientaboutsQATAR />,
          },
          {
            path: "/dashboard/addcategoryqatars",
            element: <CategoryQatar />,
          },
          {
            path: "/dashboard/categorykuwaitssdatas",
            element: <CategoryKuwaits />,
          },
         
          
          {
            path: "/dashboard/banneredit/:id",
            element: <EditHomeBanner />,
          },
          {
            path: "/dashboard/edithomeaboutus/:id",
            element: <EditHomeAboutus />,
          },
          {
            path: "/dashboard/editservicehome/:id",
            element: <EditServiceHome />,
          },
          {
            path: "/dashboard/editprojecthome/:id",
            element: <EditProjectHome />,
          },
          {
            path: "/dashboard/editawardclient/:id",
            element: <EditAwardClient />,
          },
          {
            path: "/dashboard/edittestimonial/:id",
            element: <EditTestimonialHome />,
          },
          {
            path: "/dashboard/editservicebanner/:id",
            element: <EditServiceBanner />,
          },
          {
            path: "/dashboard/editservicehr/:id",
            element: <EditServiceHr />,
          },
          {
            path: "/dashboard/editserviceadmins/:id",
            element: <EditAdminService />,
          },
          {
            path: "/dashboard/editserviceemployees/:id",
            element: <EditEmployeeService />,
          },
          {
            path: "/dashboard/editservicemanagement/:id",
            element: <EditManagement />,
          },
          {
            path: "/dashboard/editcareerbanner/:id",
            element: <EditCareerBanner />,
          },
          {
            path: "/dashboard/editworkcareers/:id",
            element: <EditWorkCareer />,
          },
          {
            path: "/dashboard/editglobalcareers/:id",
            element: <EditGlobalCareer />,
          },
          {
            path: "/dashboard/editcontactteams/:id",
            element: <EditContactTeam />,
          },
          {
            path: "/dashboard/editeventwecare/:id",
            element: <EditCareEventBanner />,
          },
          {
            path: "/dashboard/editvideocares/:id",
            element: <EditVideoCare />,
          },
          {
            path: "/dashboard/editeventmedia/:id",
            element: <EditEventmedia />,
          },
          {
            path: "/dashboard/editgallerymedia/:id",
            element: <EditGalleryMedia />,
          },
          {
            path: "/dashboard/editblogparts/:id",
            element: <EditBlogpart />,
          },
          {
            path: "/dashboard/editrecruitment/:id",
            element: <EditBannerRecruitment />,
          },
          {
            path: "/dashboard/editrecruitmentprocess/:id",
            element: <EditProcessTimeline />,
          },
          {
            path: "/dashboard/editbannertestimonials/:id",
            element: <EditBannerTestimonial />,
          },
          {
            path: "/dashboard/editgrouptestimonial/:id",
            element: <EditGroupTestimonial />,
          },
          {
            path: "/dashboard/editclientstestimonial/:id",
            element: <EditClientTestimonial />,
          },
          {
            path: "/dashboard/editaboutwhyus/:id",
            element: <EditAboutwhyus />,
          },
          {
            path: "/dashboard/editmember/:id",
            element: <EditMember />,
          },
          {
            path: "/dashboard/editmemberteam/:id",
            element: <EditMemberTeam />,
          },
          {
            path: "/dashboard/editawardcards/:id",
            element: <EditAwardCard />,
          },
          {
            path: "/dashboard/editawardsclintss/:id",
            element: <EditAwardsClients />,
          },
          {
            path: "/dashboard/editawardsstatus/:id",
            element: <EditStatusAward />,
          },
          {
            path: "/dashboard/editclienteteabouts/:id",
            element: <EditClienteteAbout />,
          },
          {
            path: "/dashboard/editclientksa/:id",
            element: <EditClientKSA/>,
          },
    
          {
            path: "/dashboard/editclientUAE/:id",
            element: <EditClientUAE/>,
          },
          {
            path: "/dashboard/editscategoryUAE/:id",
            element: <EditCategoryUAE/>,
          },
          {
            path: "/dashboard/editsclientqatars/:id",
            element: <Editclientqatar/>,
          },
          {
            path: "/dashboard/editscategorysqatars/:id",
            element: <EditCategoryqatar/>,
          },
          {
            path: "/dashboard/editscategoryskuwaits/:id",
            element: <EditCategoryskuwaits/>,
          },
    
    ],
  },
]);
export default router;

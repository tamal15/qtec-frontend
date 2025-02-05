import {  useState } from "react";
// import toast from "react-hot-toast";
import {
  FaHome,
  FaSellcast,
  FaSignOutAlt,
  FaStreetView,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; 
import useAuth from "../../Hooks/useAuth";

const DashboardSideBar = ({ setIsOpenSidebar }) => {
  // const [isOpen, setIsOpen] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutawardOpen, setAboutawardOpen] = useState(false);
  const [ispendingOpen, setPendingOpen] = useState(false);
  const [isAboutclienteleOpen, setAboutclienteleOpen] = useState(false);
  const [isbannerOpen, setbannerOpen] = useState(false);
  const [isallproductOpen, setallproductOpen] = useState(false);
  const [ishomepartOpen, sethomepartOpen] = useState(false);
  const {admin,subadmin, userLogOut } = useAuth();


//   const { logOut, authReloader, setAuthReloader } = useContext(AuthContext);
  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  
  const handleAboutAward = () => {
    setAboutawardOpen(!isAboutawardOpen);
  };
  const handleAboutclientele = () => {
    setAboutclienteleOpen(!isAboutclienteleOpen);
  };
  const handlepending = () => {
    setPendingOpen(!ispendingOpen);
  };
  
  const handlebanner = () => {
    setbannerOpen(!isbannerOpen);
  };
  const handleallproduct = () => {
    setallproductOpen(!isallproductOpen);
  };
  const handlehomepart = () => {
    sethomepartOpen(!ishomepartOpen);
  };
  
  
  
  
  

  
  // const handleToggle = (idx) =>
  //   setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <div className="w-full overflow-hidden">
        <section className="flex flex-col gap-2">
          <NavLink onClick={() => setIsOpenSidebar(false)} to={"/dashboard"}>
            <div className="  shadow  flex items-center justify-center gap-2 font-bold p-3 mt-4 duration-300 active:scale-75 md:pr-0">
              <FaHome className="text-xl text-[#007cde]" />
              <h2 className="font-semibold hidden md:block">
                Dashboard - Home
              </h2>
            </div>
          </NavLink>

          {/* pages start features  */}

          <div>
           {admin &&
           <>
            
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="overflow-hidden ">
                <div
                  onClick={handleSettingsToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden ">
                      <FaHome
                        className={`text-xl text-[#007cde] ${
                          isSettingsOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Admin</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isSettingsOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/makeadmin"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[#01c0c9] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          Make Admin
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/subadmin"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[#01c0c9] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          Sub Admin
                        </h2>
                      </div>
                    </NavLink>
                    
                    
                   
                   
                   
                    {/* <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientshomes"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        ClientGallery
                        </h2>
                      </div>
                    </NavLink> */}
                  
                 
                   
                  </div>
                </div>
              </div>
            </div>

           

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleAboutAward}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            isAboutawardOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">UserList</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isAboutawardOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/useralldata"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">All User</h2>
                      </div>
                    </NavLink>
                   
                  
                  
                   
                  </div>
                </div>
              </div>
            </div>
            {/* about award end  */}

          


            {/* about testimonial start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleallproduct}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            isallproductOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">AllProduct</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isallproductOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                   
                   
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/allproductshows"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">AllProductList</h2>
                      </div>
                    </NavLink>
                    {/* <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientaboutsqatars"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CategoryQatar</h2>
                      </div>
                    </NavLink> */}
                   
                   
                   
                  </div>
                </div>
              </div>
            </div>

            
            {/* about testimonial end   */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handlehomepart}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            ishomepartOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Home</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    ishomepartOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                   
                   
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/bannerpost"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">HomeBanner</h2>
                      </div>
                    </NavLink>
                    {/* <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientaboutsqatars"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CategoryQatar</h2>
                      </div>
                    </NavLink> */}
                   
                   
                   
                  </div>
                </div>
              </div>
            </div>
           
           </>}


            {/* about us sttart  */}

           
            {/* about us end  */}


            {/* about recruitment start  */}

          

            {/* about recruitment end  */}

            {/* about section end  */}

            {/* Blog section start  */}

         
            {/* Blog section end  */}


            { (admin || subadmin) && (

<>
           
<div
   className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
 >
   <div className="overflow-hidden">
     <div
       onClick={handlepending}
       className={`border-orange-500 border-l-[3px] cursor-pointer`}
     >
       <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
         <span className="overflow-hidden">
           <FaUsers
             className={`text-xl text-[#007cde] ${
                 ispendingOpen ? "transform rotate-180" : ""
             }`}
           />
         </span>
         <h4 className="font-semibold hidden md:block">Pending</h4>
       </div>
     </div>
     <div
       className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
         ispendingOpen
           ? "grid-rows-[1fr] opacity-100"
           : "grid-rows-[0fr] opacity-0"
       }`}
     >
       <div className="overflow-hidden">
        
       
         <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/pendingproduct"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">pendingproduct</h2>
           </div>
         </NavLink>
        
       </div>
     </div>
   </div>
 </div>


 {/* about clientele start  */}

 <div
   className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
 >
   <div className="overflow-hidden">
     <div
       onClick={handleAboutclientele}
       className={`border-orange-500 border-l-[3px] cursor-pointer`}
     >
       <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
         <span className="overflow-hidden">
           <FaUsers
             className={`text-xl text-[#007cde] ${
                 isAboutclienteleOpen ? "transform rotate-180" : ""
             }`}
           />
         </span>
         <h4 className="font-semibold hidden md:block">Package</h4>
       </div>
     </div>
     <div
       className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
         isAboutclienteleOpen
           ? "grid-rows-[1fr] opacity-100"
           : "grid-rows-[0fr] opacity-0"
       }`}
     >
       <div className="overflow-hidden">
         <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/updatepackage"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">UpdatePackage</h2>
           </div>
         </NavLink>
        
         
        
        
         {/* <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/bannerpost"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">BannerPost</h2>
           </div>
         </NavLink> */}
         {/* <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/clientaboutsqatars"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">CategoryQatar</h2>
           </div>
         </NavLink> */}
        
        
        
       </div>
     </div>
   </div>
 </div>
 {/* about clientele end  */}


 <div
   className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
 >
   <div className="overflow-hidden">
     <div
       onClick={handlebanner}
       className={`border-orange-500 border-l-[3px] cursor-pointer`}
     >
       <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
         <span className="overflow-hidden">
           <FaUsers
             className={`text-xl text-[#007cde] ${
                 isbannerOpen ? "transform rotate-180" : ""
             }`}
           />
         </span>
         <h4 className="font-semibold hidden md:block">Banner</h4>
       </div>
     </div>
     <div
       className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
         isbannerOpen
           ? "grid-rows-[1fr] opacity-100"
           : "grid-rows-[0fr] opacity-0"
       }`}
     >
       <div className="overflow-hidden">
        
        
         <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/bannerpost"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">BannerPost</h2>
           </div>
         </NavLink>
         {/* <NavLink
           onClick={() => setIsOpenSidebar(false)}
           to={"/dashboard/clientaboutsqatars"}
         >
           <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
             <FaSellcast className="text-xl text-[#01c0c9]" />
             <h2 className="font-semibold hidden md:block">CategoryQatar</h2>
           </div>
         </NavLink> */}
        
        
        
       </div>
     </div>
   </div>
 </div>



</>


           )}

            {/* service section start  */}

           
            {/* service section end   */}

            {/* contact us section start  */}

          

         
            {/* contact us section end  */}





            {/* event we care part start  */}

           

           
            {/* evenr we care part end  */}

           

           


            



          </div>

          
          {/* settings part end  */}

         

          {/* logout start */}
          <NavLink className="fw-bold" to={'/'} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><li onClick={userLogOut} className=' flex ms-5 font-bold' style={{fontSize:"20px"}}>
                                  <FaSignOutAlt className='me-1 mt-2 ' /> Log Out
                              </li></NavLink>

          {/* logout end */}
        </section>
      </div>

      <div className="w-full h-[2px] bg-white mt-5"></div>
    </>
  );
};

DashboardSideBar.propTypes = {
  setIsOpenSidebar: PropTypes.node.isRequired,
};

export default DashboardSideBar;

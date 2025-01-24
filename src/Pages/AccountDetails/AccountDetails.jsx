import { useState } from 'react';
import { FaAd, FaUser, FaSearch, FaStar, FaCog, FaPhone, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { IoMdCloudUpload } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import AddsShow from './AddsShow/AddsShow';
import SearchList from './SearchList/SearchList';
import FavouriteProduct from './FavouriteProduct/FavouriteProduct';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Setting from './Setting/Setting';

// FaBriefcase 
const AccountDetails = () => {
  const [activeTab, setActiveTab] = useState('My ads');

  const tabs = [
    { name: 'My ads', icon: <FaAd /> },
    { name: 'My membership', icon: <FaUser /> },
    { name: 'Saved searches', icon: <FaSearch /> },
    { name: 'Favourite', icon: <FaStar /> },
    { name: 'Settings', icon: <FaCog /> },
    { name: 'Phone number', icon: <FaPhone /> },
    // { name: 'Jobs', icon: <FaBriefcase /> },
    // { name: 'My profile', icon: <FaUser /> },
    // { name: 'Profile database', icon: <FaUser /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'My ads':
        return (
          <div className="w-full">

          <AddsShow/>
          </div>
        );
      case 'My membership':
        return (
          <div className="flex md:px-16 flex-col md:flex-row gap-10 items-center justify-center h-full">
           <div>
             <MdCardMembership className='text-8xl'/>
           </div>
           <div>
             <h2 className="text-2xl font-bold">Become a member</h2>
            <p className="text-gray-500 mb-4 text-left text-xl ">
              Memberships give your business a voice and presence, unlocking tools like sales analytics,
              a business page, and discounted ad promotions.
            </p>
           <Link to="/contactus">
           <button className="bg-green-500 text-white px-4 py-2 rounded">Contact us</button></Link>
           </div>
          </div>
        );
        case 'Saved searches':
          return (
            <div className="text-center p-8 w-full">
            
              <SearchList/>
            </div>
          );
          case 'Favourite':
            return (
             <div className='w-full'>
              <FavouriteProduct/>
             </div>
            );
            case 'Settings':
              return (
               <div className='w-full'>
                <Setting/>
               </div>
              
              );
            
              case 'Phone number':
                return (
                 <div className='w-full'>
                  <PhoneNumber/>
                 </div>
                );
              
      case 'Jobs':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">Jobs</h2>
            <p className="text-gray-500 mb-4 text-center">
              Manage job postings and applications here.
            </p>
          </div>
        );
      case 'My profile':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">My Profile</h2>
            <p className="text-gray-500 mb-4 text-center">
              View and edit your profile information here.
            </p>
          </div>
        );
      case 'Profile database':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">Profile Database</h2>
            <p className="text-gray-500 mb-4 text-center">
              Manage your profile database and associated details.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-4 md:mt-10 mt-20">
      {/* Sidebar */}
      <div className="bg-gray-100 w-full md:w-1/4 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
  {tabs.map((tab) => (
    <li key={tab.name} className="flex items-center justify-between gap-2 cursor-pointer py-2 px-4 rounded-lg transition-colors duration-200">
      <div
        className={`flex items-center gap-2 flex-grow ${
          activeTab === tab.name ? 'bg-gray-300 font-bold' : 'hover:bg-gray-200'
        } rounded-lg py-2 -mt-2 px-4`}
        onClick={() => setActiveTab(tab.name)}
      >
        {tab.icon}
        {tab.name}
      </div>
      <FaAngleDoubleRight className="text-gray-500" />
    </li>
  ))}
</ul>

      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountDetails;

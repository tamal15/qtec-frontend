import { useState } from 'react';
import { FaAd, FaUser, FaSearch, FaStar, FaCog, FaPhone, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdCloudUpload } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import { FcSmartphoneTablet } from 'react-icons/fc';

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
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full">
           <div>
           <IoMdCloudUpload className='text-8xl' />
           </div>
          <div>
          <h2 className="text-2xl font-bold">You don’t have any ads yet.</h2>
            <p className="text-gray-500 mb-4 text-center text-xl">
              Click the Post an ad now! button to post your ad.
            </p>
           <Link to="/postadpages">
           <button  className="bg-yellow-500 text-white px-4 py-2 rounded">Post your ad now!</button>
           </Link>
          </div>
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
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">You have no saved searches.</h2>
              <p className="text-gray-600 mb-4 text-xl">
                To save a search, click on “Saved search” in your list of search results and we will update you when there is a new item added.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center mx-auto">
                <span className="mr-2">Save search</span>
              </button>
            </div>
          );
          case 'Favourite':
            return (
              <div className="text-center p-8 flex  flex-col md:flex-row gap-10">
                <div>
                  <FaStar className='text-8xl'/>
                </div>
               <div>
                 <h2 className="text-xl font-bold mb-4">You haven’t marked any ads as favorite yet.</h2>
                <p className="text-gray-600 mb-2">
                  Click on the star symbol on any ad to save it as a favorite.
                </p>
                <p className="text-gray-600 mb-4">
                  Start to browse ads to find ads you would like to favorite.
                </p>
                <Link to="/browse">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Browse ads
                  </button>
                </Link>
               </div>
              </div>
            );
            case 'Settings':
              return (
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                {/* Left side for heading or description */}
                <div className="w-full lg:w-1/3 bg-gray-100 p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Settings</h2>
                  <p className="text-gray-600">
                    Manage your account information, update personal details, and secure your password.
                  </p>
                  <div className="mt-8">
                    <img
                      src="/path/to/your/image.png"
                      alt="Settings illustration"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              
                {/* Right side for the form */}
                <div className="w-full lg:w-2/3 bg-white p-6 shadow rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Personal Details</h3>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value="car22711@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      readOnly
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Location</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Select your location</option>
                      <option value="location1">Location</option>
                      <option value="sublocation">Sub location</option>
                    </select>
                  </div>
                  <button className="w-full lg:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                    Update Details
                  </button>
              
                  <h3 className="text-xl font-bold mt-8 mb-4">Change Password</h3>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <button className="w-full lg:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                    Change Password
                  </button>
                </div>
              </div>
              
              );
            
              case 'Phone number':
                return (
                  <div className="flex flex-col items-center justify-center h-full  p-4">
                    {/* Image with red slash */}
                    <div className="relative mb-4">
                    <FcSmartphoneTablet className='text-8xl'/>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="h-[2px] w-full bg-red-500 rotate-45 origin-center"></div>
                      </div>
                    </div>
              
                    {/* Text content */}
                    <h2 className="text-3xl font-bold">Phone Numbers</h2>
                    <p className="text-xl font-bold text-center mt-2">
                      There are currently no phone numbers associated with your account.
                    </p>
                    <p className="text-lg  text-center mt-2">
                      Phone numbers are unique to your account and will be collected while
                      you are posting ads or ordering products on Bikroy.
                    </p>
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
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-4">
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

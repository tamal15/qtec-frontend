// Import necessary libraries
import  { useState } from 'react';

// Component
const ToggleDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ms-4">About Bikroy, The Largest Marketplace in Bangladesh!</h1>
      <div className=" p-4 rounded ">
        {!isExpanded ? (
          <>
            <p className="text-gray-700">
              Bikroy is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.
            </p>
            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={toggleDescription}
            >
              Show more ▼
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-4">
              Bikroy is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.
            </p>
            <h2 className="text-xl font-semibold mb-2">Buy, Sell, Rent, or Find Jobs in Bangladesh</h2>
            <p className="text-gray-700 mb-4">
              Every month, hundreds of millions of people use Bikroy to find and sell mobiles, musical instruments, cars, houses, jobs, and more through classified ads. To sell new items or sell used items quickly, Bikroy offers Boost Ad features.
            </p>
            <p className="text-gray-700 mb-4">
              Bikroy has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options.
            </p>
            <p className="text-gray-700 mb-4">
              For businesses, Bikroy has introduced the Membership service, which helps them expand their businesses online. Members will have their virtual shop with a Bikroy URL with free promotions of their goods. With different membership categories, businesses can flourish as verified members and authorized dealers.
            </p>
            <h2 className="text-xl font-semibold mb-2">Benefits of Trading at Bikroy</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.</li>
              <li>Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.</li>
              <li>Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users.</li>
            </ul>
            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={toggleDescription}
            >
              Show less ▲
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToggleDescription;
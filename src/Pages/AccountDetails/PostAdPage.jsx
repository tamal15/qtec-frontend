import { Link } from "react-router-dom";

const PostAdPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
          Welcome car project! Lets post an ad.
        </h2>
        <p className="text-center text-gray-600 mb-6">Choose any option below</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sell something */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm border">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">💳</span> Sell something
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/uploadcategory"
                  className="text-blue-600 hover:underline block"
                >
                  Sell an item, property or service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline block"
                >
                  Offer a property for rent
                </a>
              </li>
            </ul>
          </div>

          {/* Post a job vacancy */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm border">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">📋</span> Post a job vacancy
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline block"
                >
                  Post a job in Bangladesh
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline block"
                >
                  Post a job overseas
                </a>
              </li>
            </ul>
          </div>

          {/* Look for something */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm border">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">🔍</span> Look for something
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline block"
                >
                  Look for property to rent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline block"
                >
                  Look for something to buy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <a href="#" className="text-blue-600 hover:underline">
            Know your posting allowance
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-600 hover:underline">
            See our posting rules
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostAdPage;

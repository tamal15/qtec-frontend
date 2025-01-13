import PropTypes from "prop-types";


const View = ({ product, onClose }) => {
    return (
      <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-5xl relative mt-48">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={product.images[0]}
                alt={product.model}
                className="w-full h-96 object-cover rounded"
              />
            </div>
  
            {/* Product Details Section */}
            <div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                {product.model}
              </h1>
  
              <p className="text-xl font-semibold mb-2 text-green-600">
                Tk {product.price}
              </p>
  
              <div className="text-gray-700 space-y-2 mb-4">
                <p>Condition: <span className="font-medium">{product.condition}</span></p>
                <p>Brand: <span className="font-medium">{product.brand}</span></p>
                <p>Edition: <span className="font-medium">{product.edition}</span></p>
                <p>Authenticity: <span className="font-medium">{product.authenticity}</span></p>
              </div>
  
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Features:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
  
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Description:</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>
  

           {/* Chat Option */}
           <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Chat with Seller:</h2>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Start Chat
            </button>
          </div>
          {/* Seller Info Section */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Seller Information:</h2>
            <p className="text-gray-600 mb-2">Name: {product.name}</p>
            <p className="text-gray-600 mb-2">Phone: {product.phone}</p>
            <p className="text-gray-600">Email: {product.email}</p>
          </div>
  
         
        </div>
      </div>
    );
  };
  
  View.propTypes = {
    product: PropTypes.arrayOf(PropTypes.object).isRequired, 
    onClose: PropTypes.arrayOf(PropTypes.object).isRequired, 
  };
  export default View;
  
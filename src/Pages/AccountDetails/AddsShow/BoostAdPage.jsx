import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

const BoostAdPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const packages = [
    { id: "top_ad", name: "Top Adds", price: 50, description: "Boost your ad to the top for maximum visibility!" },
    // { id: "bump_up", name: "Bump Ups", price: 195, description: "Republish your ad every 12 hours to boost visibility!" },
    // { id: "bundle", name: "Bundle", price: 180, description: "Bundle urgent and higher placement for faster sales!" },
    { id: "urgent", name: "Urgents", price: 30, description: "Highlight your ad as urgent to attract attention!" },
    // { id: "spotlight", name: "Spotlight", price: 1095, description: "Premium placement to ensure maximum exposure!" },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [boostingDays, setBoostingDays] = useState(3);
  const [boostingDate, setBoostingDate] = useState("");
  const [boostingTime, setBoostingTime] = useState("");
  const [bkashNumber, setBkashNumber] = useState("");

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPackage(null);
  };

  const handleBoostAd = async () => {
    if (!boostingDate || !boostingTime || !bkashNumber) {
      alert("Please fill all the required fields.");
      return;
    }

    try {
      await axios.put("https://to-cash-backend.onrender.com/api/updateBoost", {
        productId,
        packageName: selectedPackage.name,
        amount: selectedPackage.price,
        boostingDays,
        boostingDate,
        boostingTime,
        bkashNumber,
      });

      alert("Ad boosted successfully!");
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Error boosting ad:", error);
      alert("Failed to boost the ad. Please try again.");
    }
  };

  const pricingOptions = {
    "Top Adds": [
      { days: 2, price: 50 },
      { days: 5, price: 100 },
      { days: 7, price: 130 },
    ],
    "Urgents": [
      { days: 2, price: 30 },
      { days: 5, price: 60 },
      { days: 7, price: 90 },
    ],
  };

  return (
    <div className="max-w-lg mx-auto mt-16 mb-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Boost Your Ad</h2>
      <div className="space-y-4">
      {packages.map((pkg) => (
  <div key={pkg.id} className="mb-4 border rounded-md shadow-sm bg-white p-4">
    {/* Package Card */}
    <div className="flex justify-between items-center  ">
      <div>
        <h3 className="text-lg font-bold text-blue-600">{pkg.name}</h3>
        <p className="text-gray-600">Tk {pkg.price}</p>
      </div>
      <button
        onClick={() => openModal(pkg)}
        className="text-green-500 font-bold text-xl hover:text-green-600"
      >
        +
      </button>
    </div>

    {/* Package Description */}
    <div className="mt-2 px-4">
      <p className="text-sm text-gray-500">{pkg.description}</p>
    </div>
  </div>
))}

      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Boost Ad Modal"
        className="p-6 bg-white rounded-md shadow-md max-w-md mx-auto md:mt-32 mt-48 overflow-y-auto md:h-96 h-[300px]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
      >
        {selectedPackage && (
          <div>
            <h3 className="text-xl font-bold mb-4">Boost Your Ad - {selectedPackage.name}</h3>
            <p className="mb-4">{selectedPackage.description}</p>
            <p className="mb-4">Price: Tk {selectedPackage.price}</p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Boosting Days</label>
              <select
                value={boostingDays}
                onChange={(e) => setBoostingDays(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
              >
                {pricingOptions[selectedPackage.name].map((option) => (
                  <option key={option.days} value={option.days}>
                    {option.days} Days (Tk {option.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Boosting Start Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={boostingDate}
                onChange={(e) => setBoostingDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Boosting Start Time</label>
              <input
                type="time"
                className="w-full p-2 border rounded-md"
                value={boostingTime}
                onChange={(e) => setBoostingTime(e.target.value)}
              />
            </div>
               <h1>এই বিকাশ নম্বর <span className="text-red-500">01374846782</span> পেমেন্ট করুন</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">bKash Transaction </label>
              <input
                type="text"
                placeholder="bkash transaction  number- CGJ346HGD"
                className="w-full p-2 border rounded-md"
                value={bkashNumber}
                onChange={(e) => setBkashNumber(e.target.value)}
              />
            </div>

            <button
              onClick={handleBoostAd}
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Boost Ad
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BoostAdPage;

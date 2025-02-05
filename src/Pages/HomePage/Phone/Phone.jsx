import { useState } from "react";

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sendOtp = async () => {
    if (!/^\d{11}$/.test(phoneNumber)) {
      alert("Please enter a valid 11-digit Bangladeshi phone number.");
      return;
    }
    try {
      const response = await fetch("https://to-cash-backend.onrender.com/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        alert("OTP sent successfully!");
      } else {
        alert(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch("https://to-cash-backend.onrender.com/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMessage("Registration successful!");
      } else {
        alert(data.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error(error);
      alert("Error verifying OTP.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter 11-digit phone number"
            maxLength={11}
          />
        </div>
        {otpSent && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
              maxLength={6}
            />
          </div>
        )}
        {!otpSent ? (
          <button
            onClick={sendOtp}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send OTP
          </button>
        ) : (
          <button
            onClick={verifyOtp}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Verify OTP
          </button>
        )}
        {successMessage && (
          <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Phone;

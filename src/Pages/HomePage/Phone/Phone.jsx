import  { useState } from "react";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";

const Phone = () => {
  const { sendOtp, verifyOtp, isLoading, error, message } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    console.log("Attempting to send OTP...");
    await sendOtp(phoneNumber);
    setOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    console.log("Attempting to verify OTP...");
    await verifyOtp(otp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Phone Number Authentication</h2>

        <div id="recaptcha-container"></div> {/* reCAPTCHA container */}

        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="+8801XXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border p-2 w-full rounded mb-2"
            />
            <button
              onClick={handleSendOtp}
              disabled={isLoading}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 w-full rounded mb-2"
            />
            <button
              onClick={handleVerifyOtp}
              disabled={isLoading}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {message && <p className="text-green-500 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Phone;

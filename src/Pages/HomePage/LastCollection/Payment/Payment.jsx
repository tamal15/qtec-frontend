import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import CartCalculation from "../../../Hooks/UseCartCalculation";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";

const Payment = () => {
  const { cartProducts, totalQuantity, total, shipping, tax } = CartCalculation();
  const { user } = useAuth();
  const [shippingOption, setShippingOption] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [grandTotal, setGrandTotal] = useState(total + shipping + tax);
  const { id } = useParams();
  const [book, setBook] = useState({});
console.log(book)
  useEffect(() => {
    fetch(`https://server.virtualshopbd.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));

    // Retrieve saved shipping option
    const savedShipping = JSON.parse(localStorage.getItem("shippingOption"));
    if (savedShipping) {
      setShippingOption(savedShipping.option);
      setShippingCost(savedShipping.cost);
    }
  }, [id]);

  useEffect(() => {
    setGrandTotal(total + tax + shippingCost);
  }, [total, tax, shippingCost]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      cus_name: user?.displayName,
      cus_email: user?.phoneNumber,
      date: new Date().toLocaleDateString(),
    });
  }, [reset, user?.displayName, user?.email]);

  const onSubmit = (data) => {
    const paymentData = {
      ...data,
      total_amount: grandTotal,
      cartProducts: [...cartProducts],
      status: "Pending",
      courier_id: "id",
    };

    axios
      .post("https://server.virtualshopbd.com/init", paymentData)
      .then(() => {
        Swal.fire({ title: "Success!", text: "Payment successful!", icon: "success" }).then(() => {
          localStorage.removeItem("productCart");
          reset();
          window.location.replace(
            `/success?name=${data.cus_name}&email=${data.cus_email}&bkash=${data.cus_postcode}`
          );
        });
      })
      .catch(() => Swal.fire({ title: "Error!", text: "Something went wrong.", icon: "error" }));
  };

  const handleShippingChange = (option) => {
    const cost = option === "Dhaka Onsite" ? 0 : 150;
    setShippingOption(option);
    setShippingCost(cost);
    localStorage.setItem("shippingOption", JSON.stringify({ option, cost }));
  };

  return (
    <>
      <div className="container mx-auto p-4 mt-36">
        <ScrollToTop/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-10 rounded-lg shadow-[0_2px_10px_rgba(22,101,52,0.8)]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="p-2 border rounded" placeholder="Full Name" {...register("cus_name", { required: true })} />
                
                <div>
  <input
    className={`p-2 border rounded w-full ${
      errors.cus_email ? "border-red-500" : "border-gray-300"
    }`}
    placeholder="Phone Number"
    {...register("cus_email", { 
      required: "Phone number is required", 
      pattern: {
        value: /^[0-9]{11}$/,
        message: "Phone number must be 11 digits"
      }
    })}
  />
  {errors.cus_email && (
    <p className="text-red-500 text-sm mt-1">{errors.cus_email.message}</p>
  )}
</div>








                <input className="p-2 border rounded" placeholder="Date" {...register("date", { required: true })} />
                <input className="p-2 border rounded" placeholder="Full Address" {...register("address", { required: true })} />
                {/* <input className="p-2 border rounded" type="number" placeholder="Post Code" {...register("cus_postcode", { required: true })} /> */}
                {/* <input className="p-2 border rounded" placeholder="Phone Number" {...register("phone", { required: true })} /> */}
              </div>

              <div className="mt-4">
  <label className="block font-semibold">Choose Shipping Option: <span className="text-red-500">*</span></label>
  <div className="flex gap-4 mt-2">
    <button
      type="button"
      onClick={() => handleShippingChange("Dhaka Onsite")}
      className={`px-4 py-2 border rounded-lg ${shippingOption === "Dhaka Onsite" ? "bg-green-800 text-white" : "bg-gray-200"}`}
    >
      Dhaka insite (0 Taka)
    </button>
    <button
      type="button"
      onClick={() => handleShippingChange("Dhaka Outside")}
      className={`px-4 py-2 border rounded-lg ${shippingOption === "Dhaka Outside" ? "bg-green-800 text-white" : "bg-gray-200"}`}
    >
      Dhaka Outside (150 Taka)
    </button>
  </div>
  {shippingOption === "" && <p className="text-red-500 text-sm mt-1">Shipping option is required.</p>}
</div>

<h1 className="text-red-400"> **** ঢাকার ভেতরে আনুমানিক  ১-২ দিন এবং ঢাকার বাইরে আনুমানিক  ৩-৪ দিন ****</h1>

<button 
  type="submit" 
  className="mt-4 bg-green-800 text-white p-2 rounded disabled:bg-gray-400" 
  disabled={!shippingOption} // Disables button if no shipping is selected
>
  Submit Payment
</button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-[0_2px_10px_rgba(22,101,52,0.8)]">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total: {total.toFixed(2)} Taka</p>
            <p>Shipping: {shippingCost.toFixed(2)} Taka</p>
            <p>Tax: {tax.toFixed(2)} Taka</p>
            <p className="font-bold">Grand Total: {grandTotal.toFixed(2)} Taka</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

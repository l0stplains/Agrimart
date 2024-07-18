import React from "react";
import { useEffect } from "react";
import { rupiahToInt, appendData } from "@/utils";

const ConfirmPayment = ({ method }: { method: string }) => {
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [productsString, setProductsString] = React.useState("");
  const [bill, setBill] = React.useState("0");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const tempCart = localStorage.getItem("cart");
      const cart = JSON.parse(tempCart || "{}");
      if (Object.keys(cart).length === 0) {
        window.location.href = "/payment";
      }
      let currentdate = new Date();
      let datetime =
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " GMT+" +
        (currentdate.getTimezoneOffset() / 60) * -1;
      let total = 0;
      let product = "";
      Object.keys(cart).forEach((key) => {
        total +=
          rupiahToInt(cart[key].product["Harga Jual"]) * cart[key].quantity;
        product +=
          (product == "" ? "" : "\n") +
          `${cart[key].product["Nama Barang"]} (${cart[key].quantity})`;
      });
      setDate(datetime);
      setBill(total.toString());
      setProductsString(product);
    } else {
      alert(
        "Local Storage is not available\nYour cart will not be saved\nPlease use a modern browser to use this feature"
      );
    }
  }, []);

  const handleDone = () => {
    localStorage.removeItem("cart");
    window.location.href = "/payment/thanks";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;
    if(productsString === "" || bill === "0") return;

    setLoading(true);

    try {
      const response = await appendData(date, productsString, bill, method);
      handleDone();
      console.log("Data appended successfully:", response);
    } catch (error) {
      console.error("Error appending data:", error);
    }
  };

  return (
    <div onClick={handleSubmit}>
      <div className="hover:cursor-pointer w-full bg-gradient-to-r from-red-200 to-red-100 px-8 rounded-full h-14 flex justify-center items-center relative">
        {!loading ? (
          <h1 className="text-[22px] font-bold text-white text-center leading-none">
            CONFIRM PAYMENT
          </h1>
        ) : (
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default ConfirmPayment;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const TransferCard = ({ customerList, currentBalance, CustomerData }) => {
  const [amount, setAmount] = useState("");
  const [amountReciever, setAmountReciever] = useState();
  const [transferStatus, setTransferStatus] = useState(false);
  const router = useRouter();
  // console.log(customerList);

  const updateBalance = async (method) => {
    if (method == "deposite") {
      let requiredAmount = parseInt(currentBalance) + parseInt(amount);

      try {
        // setIsLoading(true)
        const bodyData = {
          amount: requiredAmount,
          email: amountReciever,
        };
        console.log(bodyData);
        const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/updatebalance`;
        const res = await axios.post(endpoint, { bodyData });
        console.log(res);
        const status = res.data.success;
        if (status) {
          setTransferStatus(true);
          saveTransactionData();
        }
        setTimeout(() => {
          router.push("/customers");
        }, 2000);
        // setCustomerData(data);
        // setIsLoading(false);
      } catch (error) {
        console.log("Some Error Occurred!");
      }
    } else {
      let requiredAmount =
        parseInt(CustomerData?.currentBalance) - parseInt(amount);
      try {
        const bodyData = {
          amount: requiredAmount,
          email: CustomerData?.email,
        };
        console.log(bodyData);
        const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/updatebalance`;
        const res = await axios.post(endpoint, { bodyData });
        console.log(res);
        const status = res.data.success;
        if (status) {
          setTransferStatus(true);
        }
        setTimeout(() => {
          router.push("/customers");
        }, 2000);
      } catch (error) {
        console.log("Some Error occured!");
      }
    }
  };

  const saveTransactionData = async () => {
    try {
      // setIsLoading(true)
      const bodyData = {
        from: CustomerData?.email,
        to: amountReciever,
        amount: amount,
      };
      console.log(bodyData);
      const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/savetransaction`;
      const res = await axios.post(endpoint, { bodyData });
      console.log(res);
      const status = res.data.success;
    } catch (error) {
      console.log("Some Error Occurred!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBalance("deposite");
    updateBalance("withdraw");
  };

  return (
    <div className="text-black w-full justify-center my-2 flex p-2">
      <div className="flex bg-zinc-950 border-2 w-full md:w-96 flex-col space-y-4 py-6 px-4 rounded-md">
        <form
          action=""
          className="flex flex-col w-full justify-center space-y-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="customer" className="text-white text-lg">
              Transfer to
            </label>
            <select
              className="px-4 py-3"
              name=""
              id=""
              onChange={(e) => {
                setAmountReciever(e.target.value);
              }}
              required
            >
              <option value="">Select Customer</option>

              {customerList &&
                customerList
                  ?.filter((item) => item.email !== CustomerData.email)
                  .map((item, index) => (
                    <option key={index} value={item?.email}>
                      {item?.name} - Balance ${item?.currentBalance}
                    </option>
                  ))}
            </select>
          </div>

          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="customer" className="text-white text-lg">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter Amount"
              className="px-4 py-3 outline-none"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              id=""
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-sm bg-orange-600 text-white hover:text-white hover:bg-yellow-500"
          >
            Transfer
          </button>

          {transferStatus && (
            <p className="text-white font-bold">The payment has been processed successfully.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default TransferCard;

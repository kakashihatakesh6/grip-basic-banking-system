/* eslint-disable @next/next/no-img-element */
import DepositeCard from "@/components/DepositeCard";
import { useEffect, useState } from "react";

const Dashboard = ({ customerList }) => {
  const [totalBalance, setTotalBalance] = useState(0)
  const getTotalBalance = () => {
    let count = 0;
    customerList?.map((item) => {
      count += parseInt(item.currentBalance);
    });
    console.log(count);
    setTotalBalance(count);
  }

  useEffect(() => {
    getTotalBalance();
  }, [])





  return (
    <>
      <div className="min-h-screen flex flex-col justify-start pt-10  md:ml-52 items-center px-8">
        <h1 className="text-white text-3xl font-bold ">Welcome to GRIP Banking System</h1>

        <div className="flex flex-col px-10 space-y-3 items-center md:flex-row justify-center w-full space-x-5 mt-10">

          <div className="w-full md:w-1/3 py-8 px-4 bg-white flex flex-row justify-between items-center space-x-12 rounded-md">
            <div className="space-y-2">
              <h2 className="text-blue-800 font-bold text-2xl">Total Deposite</h2>
              <span className="text text-3xl font-semibold">$82000</span>
            </div>
            <div className="flex w-24 h-24 justify-center border-4 rounded-full border-[#564e4e]">
              <img src="/charity.png" alt="kk" className="w-14 h-full object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/3 py-8 px-4 bg-white flex flex-row justify-between items-center space-x-12 rounded-md">
            <div className="space-y-2">
              <h2 className="text-blue-800 font-bold text-2xl">Total Withdraw</h2>
              <span className="text text-3xl font-semibold">$4500</span>
            </div>
            <div className="flex w-24 h-24 justify-center border-4 rounded-full border-[#564e4e]">
              <img src="/charity.png" alt="kk" className="w-14 h-full object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/3 py-8 px-4 bg-white flex flex-row justify-between items-center space-x-12 rounded-md">
            <div className="space-y-2">
              <h2 className="text-blue-800 font-bold text-2xl">Total Balance</h2>
              <span className="text text-3xl font-semibold">$130000</span>
            </div>
            <div className="flex w-24 h-24 justify-center border-4 rounded-full border-[#564e4e]">
              <img src="/charity.png" alt="kk" className="w-14 h-full object-contain" />
            </div>
          </div>

        </div>

        <div className="mt-10 text-white">
          <DepositeCard title={"Deposite"} btnText={"Deposite"} />
        </div>

      </div>

    </>
  );
}

export default Dashboard;

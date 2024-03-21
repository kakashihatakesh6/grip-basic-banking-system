/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function Home({ customerList }) {
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
      <div className="min-h-screen flex flex-col justify-start pt-40 md:ml-52 items-center px-8">
        <h1 className="text-white text-3xl font-bold mb-4">Welcome to GRIP Banking System</h1>

        <div className="text-white space-y-3 w-full justify-center items-center py-2 flex flex-col">
          <h2 className="text-white text-xl font-semibold">{`Hi, I'm Nikhil Dasar`}</h2>
          <p>Web Developer Intern at The Spark Foundation, batch March 2024.</p>
          <span>This is task 1: Basic Banking System.</span>
          <p>Using NextJS, JavaScript, MongoDB, TailwindCSS, JSX</p>
        </div>

      </div>

    </>
  );
}

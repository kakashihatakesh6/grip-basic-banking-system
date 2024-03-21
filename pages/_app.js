import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [customerList, setCustomerList] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCustomersData();
  }, [])

  const fetchCustomersData = async () => {
    try {
      setIsLoading(true)
      const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/fetchcustomers`;
      const res = await axios.get(endpoint);
      const data = res.data.customers;
      // console.log(data.length)
      setCustomerList(data);

      setIsLoading(false)

    } catch (error) {
      console.log("Some Error Occurred!")
    }
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} customerList={customerList} />
    </>
  )

}

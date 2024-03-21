import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllTransactions = () => {
    const [transData, setTransData] = useState();

    useEffect(() => {
        fetchAllTransactions();
    }, [])

    const fetchAllTransactions = async () => {
        try {
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getalltransactions`;
            const res = await axios.get(endpoint);
            const data = res.data.transactions;
            setTransData(data);

        } catch (error) {
            console.log("Some Error Occurred!");
        }
    }

    return (
        <div className="overflow-x-auto pt-10 ml-52">

            <h1 className="text-white text-3xl text-center font-bold mb-10">All Transactions</h1>

            <div className='flex mx-auto px-4 rounded-md'>
                <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                From
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                To
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Method
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Reciept
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                        {transData?.map((item, index) => (

                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{((item.transferredAt).split(" "))[1]}-{((item.transferredAt).split(" "))[2]}-{((item.transferredAt).split(" "))[3]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.from}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.to}</td>

                                <td className="px-6 py-4 whitespace-nowrap">Bank Transfer</td>
                                <td className="px-6 py-4 whitespace-nowrap text-red-500">-${item.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap underline cursor-pointer hover:text-orange-500">View</td>
                            </tr>

                        ))}
                        {/* Add more rows here for additional transactions */}
                        {/* <tr>
                            <td className="px-6 py-4 whitespace-nowrap">2024-03-13</td>
                            <td className="px-6 py-4 whitespace-nowrap">Nikhil </td>
                            <td className="px-6 py-4 whitespace-nowrap">Tripti</td>

                            <td className="px-6 py-4 whitespace-nowrap">Bank Transfer</td>
                            <td className="px-6 py-4 whitespace-nowrap text-red-500">-$100.00</td>
                            <td className="px-6 py-4 whitespace-nowrap underline cursor-pointer">View</td>
                        </tr> */}
                        {/* Add more rows here for additional transactions */}
                        {/* <tr>
                            <td className="px-6 py-4 whitespace-nowrap">2024-03-13</td>
                            <td className="px-6 py-4 whitespace-nowrap">Nikhil </td>
                            <td className="px-6 py-4 whitespace-nowrap">Tripti</td>

                            <td className="px-6 py-4 whitespace-nowrap">Bank Transfer</td>
                            <td className="px-6 py-4 whitespace-nowrap text-red-500">-$100.00</td>
                            <td className="px-6 py-4 whitespace-nowrap underline cursor-pointer">View</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTransactions
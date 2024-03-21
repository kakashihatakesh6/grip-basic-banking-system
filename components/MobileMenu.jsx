import React from 'react'

const MobileMenu = ({visible}) => {

    if (!visible) {
        return null;
    }

  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className='flex flex-col gap-4'>
            
            <div className="px-3 text-white text-center hover:underline">
                Home
            </div>
            <div className="px-3 text-white text-center hover:underline">
                View All Customers
            </div>
            <div className="px-3 text-white text-center hover:underline">
                Transfer Money
            </div>
            <div className="px-3 text-white text-center hover:underline">
                All Transactions
            </div>
            <div className="px-3 text-white text-center hover:underline">
                Help
            </div>
            <div className="px-3 text-white text-center hover:underline">
                Contact Us
            </div>

        </div>
    </div>
  )
};

export default MobileMenu;
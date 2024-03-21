import MoneyTransferCard from '@/components/MoneyTransferCard'
import React from 'react'

const MoneyTransfer = () => {
    return (
        <div className='flex w-full min-h-screen justify-center'>
            <div className='ml-52 mt-24 space-y-10'>
                <h1 className="text-white text-3xl font-bold w-full text-center">Money Transfer</h1>
                <MoneyTransferCard title={"Bank to bank transfer"} btnText={"Transfer"} />
            </div>

        </div>
    )
}

export default MoneyTransfer
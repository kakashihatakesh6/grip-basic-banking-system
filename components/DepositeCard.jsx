import React from "react";

const DepositeCard = ({title, btnText}) => {
  return (
    <div className="bg-zinc-950 w-96 border-2 rounded-md shadow-md">
      <div className="w-full px-2 py-4 ">
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        <div className="w-full h-12 mt-8 mb-6">
          <input
            type="text"
            className="w-full h-full px-2 outline-none text-black"
            placeholder="Deposite Amount"
          />
        </div>

        <button
          className="bg-orange-600 px-6 py-2 w-full hover:bg-slate-500 hover:text-orange-600
      text-lg font-semibold"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default DepositeCard;

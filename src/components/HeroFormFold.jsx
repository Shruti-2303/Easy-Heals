import React from "react";

const HeroFormFold = () => {
  return (
    <div className="items-center">
      <div className="text-xl font-poppins font-extrabold text-[#EA4E24] text-center pt-3">
        Share Your Health Concerns
      </div>
      <div className="text-[10px] text-[#242424] font-poppins text-center">
        Our Healthcare Specialists Will Get In Touch With You
      </div>
      <div className="w-[90vw] mx-auto mt-5 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name *"
          className="border border-solid border-[#D6D6D6] rounded-md p-2 text-[#242424] text-xs w-full outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-solid border-[#D6D6D6] rounded-md p-2 text-[#242424] text-xs w-full outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number *"
          className="border border-solid border-[#D6D6D6] rounded-md p-2 text-[#242424] text-xs w-full outline-none"
        />
        <input
          type="text"
          placeholder="Type Your Query *"
          className="border border-solid border-[#D6D6D6] rounded-md p-2 text-[#242424] text-xs w-full outline-none"
        />
        <input
          type="text"
          placeholder="Medical Query *"
          className="border border-solid border-[#D6D6D6] rounded-md p-2 text-[#242424] text-xs w-full outline-none"
        />
        <button className="bg-[#EA4E24] text-white font-bold py-2 px-5 rounded-md text-xs w-1/3 mx-auto">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default HeroFormFold;

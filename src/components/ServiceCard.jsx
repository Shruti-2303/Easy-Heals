import React from "react";

const ServiceCard = ({ info }) => {
  const { image, contact, message, description } = info;
  return (
    <div className="border border-gray-300 rounded-lg px-3 py-4 flex flex-col gap-2 items-center w-[80%] mx-auto">
      <div className="w-1/4">
        <img src={image} alt="" />
      </div>
      <div className="text-sm text-gray-400">{message}</div>
      <div className="text-md font-bold">{contact}</div>
      <div className="text-xs text-gray-400 text-center">{description}</div>
    </div>
  );
};

export default ServiceCard;

import ServiceCardContainer from "./ServiceCardContainer";

const ServicesFold = () => {
  return (
    <div className="flex flex-col items-center w-[90vw] mx-auto my-10 gap-6 sm:w-[80vw]">
      <div>
        <div className="text-xs text-center">Always get in touch</div>
        <div className="text-xl text-center font-extrabold text-[#EA4E24]">
          We are ready to serve you
        </div>
      </div>
      <div>
        <ServiceCardContainer />
      </div>
    </div>
  );
};

export default ServicesFold;

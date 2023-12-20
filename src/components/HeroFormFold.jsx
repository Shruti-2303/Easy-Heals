import doctorImg from "../assets/Doctor-pic.png";
const HeroFormFold = () => {
  return (
    <div className="items-center sm:flex sm:gap-3 sm:w-full sm:my-8">
      <div className="hidden sm:w-1/2 sm:flex justify-center items-center">
        <img className="w-1/2 " src={doctorImg} alt="Doctor Picture" />
      </div>
      <div className="sm:w-1/2 ">
        <div className="text-xl font-extrabold text-[#EA4E24] text-center pt-3 sm:text-start sm:text-3xl">
          Share Your Health Concerns
        </div>
        <div className="text-[10px] text-[#242424] text-center sm:text-start sm:text-sm">
          Our Healthcare Specialists Will Get In Touch With You
        </div>
        <form className="w-[90vw] mx-auto mt-5 flex flex-col gap-4 sm:w-[70%] sm:mx-0">
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
          <button className="bg-[#EA4E24] text-white font-bold py-2 px-5 rounded-md text-xs w-1/3 mx-auto sm:mx-0">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroFormFold;

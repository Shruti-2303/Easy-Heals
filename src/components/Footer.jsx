import logo from "../assets/easyHealsLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#3D4461] p-6 flex flex-col gap-4 sm:gap-10 sm:pt-10 sm:px-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-around">
        <div className="flex flex-col gap-3 ">
          <img className="w-3/5 sm:w-[50%]" src={logo} alt="Logo" />
          <div className="text-sm text-white">Easy access to healthcare</div>
          <div className="text-white flex gap-3 text-md">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
        <div className="text-white text-sm flex flex-col gap-2 ">
          <div className="font-bold">Company</div>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Term & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="text-white text-sm flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="font-bold">Contact Us</div>
            <div className="flex gap-2">
              <FaPhoneAlt />
              <span>+91-7510818108</span>
            </div>
            <div className="flex gap-2">
              <IoMdMail />
              <span>sales@easyheals.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Address</div>
            <div className="flex gap-2">
              <IoLocationSharp />
              <span>Pimple Saudagar, Pune 411027</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-white text-center">
        Copyrights © 2023 by EasyHeals Technologies Private Limited. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;

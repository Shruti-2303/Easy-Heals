import ServiceCard from "./ServiceCard";
import customerIcon from "../assets/customer-care.png";
import mailIcon from "../assets/mail.png";
import convoIcon from "../assets/conversation.png";
const ServiceCardContainer = () => {
  const serviceInfo = [
    {
      image: customerIcon,
      message: "Have Query? Call Us",
      contact: "+91-7510818108",
      description:
        "Please call us for any healthcare related queries. We will be happy to assist you.",
    },
    {
      image: mailIcon,
      message: "Drop Us A Line",
      contact: "sales@easyheals.com",
      description:
        "Write to us for any healthcare enquiry. We will respond as soon as we can",
    },
    {
      image: convoIcon,
      message: "Drop Us A Line",
      contact: "Pune Office",
      description: "Meet us for partnership and business growth.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {serviceInfo.map((info) => {
        return <ServiceCard key={info.message} info={info} />;
      })}
    </div>
  );
};

export default ServiceCardContainer;

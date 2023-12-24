import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Desktop Application",
    icon: "img/svg/cpu.svg",
    img: "img/service/1.jpg",
    description: [
      "I excel in crafting innovative and efficient desktop applications tailored to your business needs. With a focus on user-friendly interfaces and seamless functionality, I bring years of expertise to deliver desktop solutions that elevate your operations.",
      "In the ever-evolving digital landscape, your website is the cornerstone of your online presence. Recognizing that almost 95 percent of a user’s initial impression is tied to web design, I prioritize crafting websites that leave a lasting impact. As a freelance developer, I bring a personalized touch to every project, ensuring a unique and tailored solution for your business.",
      "Partnering with me goes beyond just website development; it's a collaboration focused on driving results. Let's work together to create a custom website that not only reflects your brand but also propels your business forward.",
    ],
  },
  {
    name: "Mobile Application",
    icon: "img/svg/phone.svg",
    img: "img/service/2.jpg",
    description: [
      "In the mobile-centric era, having a standout app is essential. I specialize in creating mobile applications that not only resonate with your brand but also enhance user experiences. From intuitive designs to robust functionalities, your mobile app will be a reflection of quality and innovation.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    name: "Website Development",
    icon: "img/svg/web.svg",
    img: "img/service/3.jpg",
    description: [
      "Crafting innovative and effective websites is my expertise. I go beyond just creating a web presence; I build digital experiences that capture your brand essence and significantly enhance conversion rates. My goal is to maximize your revenue, fostering business growth and helping you achieve your objectives.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    name: "API Development",
    icon: "img/svg/star.svg",
    img: "img/service/4.jpg",
    description: [
      "In the intricate world of data connectivity, API development is key. As a seasoned developer, I understand the importance of creating robust and secure APIs. Partnering with me ensures the seamless integration of your applications, facilitating efficient data flow and enhancing overall system performance.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;

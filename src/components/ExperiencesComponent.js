import React from "react";
import { FiArrowUpLeft } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SliderComponent from "./Slider";
import "./Experiences.css";
const ExperiencesComponent = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };

  const items = [
    {
      image: "/images/shop.PNG",
      title: "فروشگاه آنلاین کفش",
      subTitle: "فروشگاه اینترنتی با بک اند واقعی",
      id: 1,
    },
    {
      image: "/images/real-estate.PNG",
      title: "بانک اطلاعات املاک",
      subTitle: "وب اپلیکیشنی برای ذخیره و دسترسی آسان به اطلاعات املاک",

      id: 2,
    },

    {
      image: "/images/farsi-portfolio.PNG",
      title: "پورتفولیو فارسی",
      subTitle: "یک پورتفولیو ساده و جامع",

      id: 3,
    },
  ];

  const showSelectedItem = (id) => {
    navigate(`/experiences/${id}`);
  };

  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="page-container">
        <div className="experinces-section">
          <SliderComponent />
          <div className="selected-projects-container">
            {items.map((item) => {
              return (
                <div className="selected-project" key={item.id}>
                  <div className="selected-project-content-section">
                    <h2>{item.title}</h2>
                    <p>{item.subTitle}</p>
                    <button onClick={() => showSelectedItem(item.id)}>
                      مشاهده پروژه <FiArrowUpLeft />
                    </button>
                  </div>
                  <div className="selected-project-image-section">
                    <img
                      src={item.image}
                      alt="project"
                      className="experiences-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ExperiencesComponent;

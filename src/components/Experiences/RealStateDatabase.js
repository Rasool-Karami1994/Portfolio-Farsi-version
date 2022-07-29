import React from "react";
import real from "../../assets/img/real-estate.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const RealStateDatabaseExperience = () => {
  const item = [
    {
      image1: "/images/mobile-database.PNG",
      Title: "بانک اطلاعات املاک",
      subTitle: "وب اپلیکیشنی برای ذخیره و دسترسی آسان به اطلاعات",
      live: "https://rasool-real-estate-database.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/real-estate-database",
    },
  ];

  const navigate = useNavigate();
  const redirector = () => {
    navigate("/experiences");
  };

  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="experience-container">
        {item.map((item) => (
          <div className="first-section-contaiener">
            <div className="first-section-left">
              <h3>{item.Title}</h3>
              <p>{item.subTitle}</p>
              <div className="button-container">
                <button>
                  <a href={item.live} target="blank">
                    دمو
                  </a>
                </button>
                <button>
                  <a href={item.gitHub} target="blank">
                    گیت هاب
                  </a>
                </button>
              </div>
            </div>
            <img
              src={item.image1}
              className="first-img"
              alt="this is an img"
            ></img>
          </div>
        ))}

        <div className="description-container">
          <h3>توضیحات</h3>
          <p>
            یک وب اپلیکیشن با طراحی ساده و مینیمال برای ذخیره و دسترسی ساده
            اطلاعات املاک در دیتابیس.
          </p>
          <p>
            در این اپلیکیشن شما می تونید تعداد نا محدودی دسته بندی ایجاد کرده و
            اطلاعات املاک خود را در آن ها ذخیره کنید. و در زمان نیاز با استفاده
            از فیلتر و باکس جست و جو تعبیه شده دیتا مورد نظر را به راحتی بیابید.
          </p>
          <p>
            این اپلیکیشن با استفاده از ریکت و سی اس اس توسعه داده شده و براساس
            یک طرح یو آی از سایت دریبل اون رو پیاده کرده ام.
          </p>
        </div>
        <img
          alt="desktop-size"
          src={real}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default RealStateDatabaseExperience;

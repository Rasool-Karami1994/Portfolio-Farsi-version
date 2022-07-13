import React from "react";
import weather from "../../assets/img/weather2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const WeatherAppExperience = () => {
  const item = [
    {
      image1: "/images/weather1.png",
      Title: "برنامه هواشناسی",
      live: "https://rasool-todolist-app.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/weather-application",
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
              <p>ساخته شده با React & Css</p>
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

        <div className="second-section-container">
          <img src={weather} className="first-img" alt="this is an img"></img>
          <div className="right-side-container">
            <h3>توضیحات</h3>
            <p>
              در این اپلیکیشن من از یک ای پی آی واقعی برای گرفتن اطلاعات دقیق
              هواشناسی استفاده کردم. شما کافیه که نام شهر موردنظرتون رو در باکس
              جست وجو وارد کنید و دکمه رو فشار بدید و کمتر از چند صدم ثانیه
              اطلاعات اون لوکیشن برای شما نمایش داده می شه.
            </p>
            <p>
              این برنامه کاملا ریسپانسیو بوده و هدف من از انجام این تمرین کار با
              ای پی آی و کاندیشنال رندرینگ بود
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherAppExperience;

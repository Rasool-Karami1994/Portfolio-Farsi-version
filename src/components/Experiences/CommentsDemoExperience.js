import React from "react";
import comment from "../../assets/img/comments-app2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CommentsDemoExperience = () => {
  const item = [
    {
      image1: "/images/comments.png",
      Title: "سیستم نظردهی فارسی",
      live: "https://rasool-http-app-demo.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/Comments-demo",
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
          <img src={comment} className="first-img" alt="this is an img"></img>
          <div className="right-side-container">
            <h3>توضیحات</h3>
            <p>
              من توی این برنامه از ری اکت روتر دام ورژن 6 برای ایجاد یک قسمت از
              سیستم نظر دادن استفاده کردم که می تونید نظر خودتون رو وارد کنیدو
              سایر نظر هارو ببینید . هدف اصلی من از انجام این مینی پروژه کار با
              ری اکت روتر دام وپارامز های سفارشی بود. In this program, I used
            </p>
            <p>
              .ویژگی اصلی این پروژه هم فارسی بودن و استفاده از فونت سفارشی است
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsDemoExperience;

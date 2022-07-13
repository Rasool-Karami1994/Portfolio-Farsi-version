import React from "react";
import image2 from "../../assets/img/todolist2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TodoListExperience = () => {
  const item = [
    {
      image1: "/images/todo-list.png",
      Title: "برنامه لیست کارهای روزانه",
      live: "https://rasool-todolist-app.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/todolist-app",
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
          <img src={image2} className="first-img" alt="this is an img"></img>
          <div className="right-side-container">
            <h3>توضیحات</h3>
            <p>
              بعد از وارد کردن کارهای روزانه خود، این برنامه لیستی از اون ها رو
              به شما نشون می ده که می تونید اون هارو رو حذف و یا اصلاح کنید.
            </p>
            <p>
              بعد از انجام دادن هر کار می تونید اون رو به لیست انجام شده ها
              بفرستید و یا با استفاده از فیلتر های موجود در برنامه دنبال کارهای
              انجام نشده یا تکمیل شده خودتون بگردید.
            </p>
            <p>
              توی این مینی پروژه من از ری اکت استفاده کردم و هدف اصلی من هم کار
              با هوک های ریکت و استفاده از کاندیشنال رندرینگ بود.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListExperience;

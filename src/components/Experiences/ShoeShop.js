import React from "react";
import shop from "../../assets/img/shop.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ShoeShopExperience = () => {
  const item = [
    {
      image1: "/images/mobile-shop.PNG",
      Title: "فروشگاه آنلاین کفش",
      subTitle: "فروشگاه اینترنتی با بک اند واقعی",
      live: "https://rasool-shop.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/shoe-shop",
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
                    دمو{" "}
                  </a>
                </button>
                <button>
                  <a href={item.gitHub} target="blank">
                    گیت هاب{" "}
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
          <p>یک فروشگاه آنلاین کفش با بک اند واقعی و دیتا بیس منگو دی بی</p>
          <p>
            در این وب سایت تمامی مراحل خرید اینترنتی به طور کامل پیاده سازی شده
            است و برای طراحی اون از فروشگاه نایکی و فروشگاه کفش پاما الهلم گرفته
            ام.
          </p>
          <p>
            این فروشگاه با استفاده از ریکت و سی اس اس توسعه داده شده و در آن از
            .اکسیوس، رست ای پی آی و مفاهیم پایه جاوا اسکریپت استفاده کرده ام
          </p>
        </div>
        <img
          alt="desktop-size"
          src={shop}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default ShoeShopExperience;

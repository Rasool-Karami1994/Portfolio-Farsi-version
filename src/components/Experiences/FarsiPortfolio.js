import React from "react";
import FarsiPort from "../../assets/img/farsi-portfolio.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FarsiPortfolio = () => {
  const item = [
    {
      image1: "/images/mobile-farsi-port.PNG",
      Title: "پورتفولیو فارسی",
      subTitle: "یک پورتفولیو ساده و جامع",
      live: "https://rasool-farsi-portfolio.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/Portfolio-Farsi-version",
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
            نسخه فارسی پورتفولیو شخصی من که تعدادی از پروژه های خودم رو برای
            ارائه در اون قرار داده ام؛ درصفحه درباره من می تونید مقاله ای رو که
            در مورد مسیر شغلیم طی کردم مطالعه کنید و راه های ارتباط با من هم در
            تمام صفحات وب پیج در دسترس تان خواهد بود.
          </p>
          <p>
            این وب پیج با استفاده از ریکت و سی اس اس توسعه داده شده و در اون از
            ریکت روتر دام و ریکت سیپر استفاده کرده ام.
          </p>
        </div>
        <img
          alt="desktop-size"
          src={FarsiPort}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default FarsiPortfolio;

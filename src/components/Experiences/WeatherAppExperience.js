import React from "react";
import weather from "../../assets/img/weather2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const WeatherAppExperience = () => {
  const item = [
    {
      image1: "/images/weather1.png",
      Title: "Weather App",
      subTitle: "Built with React & Css",
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
              <p>{item.subTitle}</p>
              <div className="button-container">
                <button>
                  <a href={item.live} target="blank">
                    Live
                  </a>
                </button>
                <button>
                  <a href={item.gitHub} target="blank">
                    GitHub
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
            <h3>DESCRIPTION</h3>
            <p>
              In this application, I use a real api to receive and display the
              weather information of any city that is typed in the name box, so
              that you can check any city as many times as you want without
              restrictions.
            </p>
            <p>
              This application is fully responsive and was an exercise to work
              with api and conditional rendering
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherAppExperience;

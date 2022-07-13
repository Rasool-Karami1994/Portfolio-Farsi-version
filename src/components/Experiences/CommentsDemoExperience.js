import React from "react";
import comment from "../../assets/img/comments-app2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CommentsDemoExperience = () => {
  const item = [
    {
      image1: "/images/comments.png",
      Title: "Persian Comments App",
      subTitle: "Built with React & Css",
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
          <img src={comment} className="first-img" alt="this is an img"></img>
          <div className="right-side-container">
            <h3>DESCRIPTION</h3>
            <p>
              In this program, I used React Router Dom to simulate a part of a
              page that was selected to add comments and display comments. My
              main goal was to work with React Router Dom and custom parameters.
            </p>
            <p>
              And the main feature of this program is having Persian language
              which is implemented with one of the Google fonts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsDemoExperience;

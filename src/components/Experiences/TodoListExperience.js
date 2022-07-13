import React from "react";
import image2 from "../../assets/img/todolist2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TodoListExperience = () => {
  const item = [
    {
      image1: "/images/todo-list.png",
      Title: "Todo List App",
      subTitle: "Built with React & Css",
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
          <img src={image2} className="first-img" alt="this is an img"></img>
          <div className="right-side-container">
            <h3>DESCRIPTION</h3>
            <p>
              This program is a todolist with the feature of adding new todos,
              deleting and editing them.
            </p>
            <p>
              After doing each todo, you can add it to the done list and easily
              find the desired item with the available filters.
            </p>
            <p>
              In this mini project, I used React and CSS, and it was an exercise
              to learn more about React hooks and how to filter items.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListExperience;

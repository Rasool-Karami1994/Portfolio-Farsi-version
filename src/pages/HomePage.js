import React from "react";
import blob from "../assets/img/blob.svg";
import man from "../assets/img/man .png";
const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h1>
          I'm Rasool <span>KARAMI</span>
        </h1>
        <h3>Front-End Web Developer</h3>
        <p>
          Here you can see all of my <br />
          web development skills & experiences
        </p>
        <a href="/">DOWNLOAD CV</a>
      </div>
      <div className="images">
        <img src={blob} alt="blob" className="shape" />
        <img src={man} alt="man" className="man" />
      </div>
    </div>
  );
};

export default HomePage;

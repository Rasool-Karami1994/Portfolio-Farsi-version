import React from "react";
import blob from "../assets/img/blob.svg";
import man from "../assets/img/man .png";
const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h1>
          <span>رسول </span>کرمی
        </h1>
        <h3>توسعه دهنده فرانت اند</h3>
        <p>
          از اینجا می تونیدمهارت ها
          <br />و تجربیات من رو مشاهده کنید
        </p>
        <a href="/"> دانلود رزومه</a>
      </div>
      <div className="images">
        <img src={blob} alt="blob" className="shape" />
        <img src={man} alt="man" className="man" />
      </div>
    </div>
  );
};

export default HomePage;

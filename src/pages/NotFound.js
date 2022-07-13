import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/img/404.jpg";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>گم شدی؟</h2>
      <h4>
        متاسفم، صفحه موردنظرتون رو پیدا نکردم. میتونید از صفحه خانه به هرکجای
        سایت برید.
      </h4>
      <h3>
        <Link to="/">خانه</Link>
      </h3>
      <img src={notFoundImg} alt="404-image"></img>
    </div>
  );
};

export default NotFound;

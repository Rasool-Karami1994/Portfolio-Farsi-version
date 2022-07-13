import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../assets/img/logo.svg";
const Navigation = () => {
  const params = useParams();
  console.log(params);
  const items = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "EXPERIENCES", to: "/experiences" },
    // { name: "HIRE ME", to: "/hire-me" },
  ];

  return (
    <nav>
      <img src={logo} alt="RasDev Logo" className="logo" />
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

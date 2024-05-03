import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },
  {
    name: "Menu",
    url: "/",
  },
  {
    name: "Reservations",
    url: "/reservations",
  },
  {
    name: "Order Online",
    url: "/",
  },
  {
    name: "Login",
    url: "/",
  },
];

const Nav = ({ isVertical }) => {
  const ulStyle = isVertical
    ? {
        listStyle: "none",
      }
    : {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        padding: "0",
      };

  const liStyle = isVertical
    ? { marginButton: "10px" }
    : {
        marginLeft: "20px",
      };

  const aStyle = {
    textDecoration: "none",
    fontSize: "28px",
    color: "#333333",
  };

  return (
    <nav className="header-nav">
      <ul style={ulStyle}>
        {menu.map((item, index) => (
          <li key={index} style={liStyle}>
            <Link to={item.url} style={aStyle}>
              {item.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;

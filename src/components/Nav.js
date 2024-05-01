import React from "react";

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
    url: "/",
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
  };

  return (
    <nav className="header-nav">
      <ul style={ulStyle}>
        {menu.map((item, index) => (
          <li style={liStyle}>
            <a key={index} href={item.url} role="button" style={aStyle}>
              {item.name.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;

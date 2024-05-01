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

const Nav = () => {
  const list = menu.map((item, index) => (
    <li>
      <a key={index} href={item.url} role="button">
        {item.name.toUpperCase()}
      </a>
    </li>
  ));

  return (
    <nav className="header-nav">
      <ul>{list}</ul>
    </nav>
  );
};
export default Nav;

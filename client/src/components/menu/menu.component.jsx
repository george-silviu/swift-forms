import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";

import { NavLink } from "react-router-dom";

import "./menu.styles.scss";

const menuItems = [
  {
    name: "Dashboard",
    icon: <TbLayoutDashboardFilled className="icon" size="20px" />,
    path: "/dashboard",
  },
  {
    name: "Leave requests",
    icon: <SiGoogleforms className="icon" size="20px" />,
    path: "/leave-requests",
  },
];

const Menu = () => {
  return (
    <menu>
      <img className="logo" src="logo2.png" />

      <section className="menu-items">
        {menuItems.map((item, index) => (
          <NavLink key={index} className="menu-item" to={item.path}>
            <div className="icon-container">{item.icon}</div>
            {item.name}
          </NavLink>
        ))}
      </section>
    </menu>
  );
};

export default Menu;

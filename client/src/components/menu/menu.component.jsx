import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";

import "./menu.styles.scss";

const menuItems = [
  {
    name: "Dashboard",
    icon: <TbLayoutDashboardFilled />,
  },
  {
    name: "Leave requests",
    icon: <SiGoogleforms />,
  },
];

const Menu = () => {
  return (
    <menu>
      <img className="logo" src="logo2.png" />

      <section className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            {item.icon} {item.name}
          </div>
        ))}
      </section>
    </menu>
  );
};

export default Menu;

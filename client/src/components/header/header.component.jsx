import { FaUserCircle } from "react-icons/fa";

import { IoNotificationsCircle } from "react-icons/io5";

import BreadCrumb from "../breadcrumb/breadcrumb.component";

import "./header.styles.scss";

const Header = () => {
  return (
    <header>
      <BreadCrumb />

      <div className="header-icons">
        <div className="icon">
          <IoNotificationsCircle />
        </div>
        <div className="icon">
          <FaUserCircle size="25px" />
        </div>
      </div>
    </header>
  );
};

export default Header;

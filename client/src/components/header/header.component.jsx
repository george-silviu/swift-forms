import { FaUserCircle } from "react-icons/fa";

import { IoNotificationsCircle } from "react-icons/io5";

import BreadCrumb from "../breadcrumb/breadcrumb.component";

import "./header.styles.scss";

const Header = () => {
  return (
    <header>
      <BreadCrumb />

      <div className="header-icons">
        <IoNotificationsCircle className="icon" size="29px" />
        <FaUserCircle className="icon" size="25px" />
      </div>
    </header>
  );
};

export default Header;

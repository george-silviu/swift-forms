import { useContext } from "react";

import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";

import BreadCrumb from "../breadcrumb/breadcrumb.component";
import UserDropdown from "../user-dropdown/user-dropdown.component";

import { HeaderContext } from "../../contexts/header.context";

import "./header.styles.scss";

const Header = () => {
  const { isUserMenuOpen, setIsUserMenuOpen } = useContext(HeaderContext);

  const handleMenuDisplay = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header>
      <BreadCrumb />

      <div className="header-icons">
        <IoNotificationsCircle className="icon" size="29px" />
        <FaUserCircle
          className="user-icon"
          size="25px"
          onClick={handleMenuDisplay}
        />
      </div>

      {isUserMenuOpen && <UserDropdown />}
    </header>
  );
};

export default Header;

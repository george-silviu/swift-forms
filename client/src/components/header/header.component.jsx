import { FaUserCircle } from "react-icons/fa";

import "./header.styles.scss";

const Header = () => {
  return (
    <header>
      <div className="header-icons">
        <div className="icon">
          <FaUserCircle size="25px" />
        </div>
      </div>
    </header>
  );
};

export default Header;

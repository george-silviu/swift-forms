import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import "./breadcrumb.styles.scss";

const BreadCrumb = () => {
  return (
    <ul className="breadcrumb">
      <li>
        <NavLink to="/dashboard">
          <FaHome size="25px" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </ul>
  );
};

export default BreadCrumb;

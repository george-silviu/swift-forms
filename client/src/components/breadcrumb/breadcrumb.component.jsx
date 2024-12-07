import { Link, useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import "./breadcrumb.styles.scss";

const BreadCrumb = () => {
  const location = useLocation();

  return (
    <ul className="breadcrumb">
      <li>
        <Link to="/dashboard">
          <FaHome size="20px" />
        </Link>
      </li>

      {location.pathname.includes("/dashboard") && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {location.pathname.includes("/leave-requests") && <li>Leave requests</li>}
      {location.pathname.includes("/leave-requests/") && <li>Request 22</li>}
    </ul>
  );
};

export default BreadCrumb;

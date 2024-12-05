import { Outlet } from "react-router-dom";

import Header from "../components/header/header.component";
import Menu from "../components/menu/menu.component";
import Footer from "../components/footer/footer.component";

import "./layout.styles.scss";

const Layout = () => {
  return (
    <section className="grid-container">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;

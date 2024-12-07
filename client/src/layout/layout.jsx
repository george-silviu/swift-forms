import { Outlet } from "react-router-dom";

import Header from "../components/header/header.component";
import Menu from "../components/menu/menu.component";
import Footer from "../components/footer/footer.component";

import { HeaderProvider } from "../contexts/header.context";

import "./layout.styles.scss";

const Layout = () => {
  return (
    <section className="grid-container">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Menu />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;

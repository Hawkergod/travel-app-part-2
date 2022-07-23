import { Outlet } from "react-router";
import { Footer } from "../footer";
import { Header } from "../header";
import "assets/css/style.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

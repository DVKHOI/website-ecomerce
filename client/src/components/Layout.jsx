import React, { Fragment } from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Announcement></Announcement>
      <Navbar></Navbar>
      {children}

      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;

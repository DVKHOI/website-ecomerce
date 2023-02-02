import React from "react";
import Categories from "../components/Categories";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <Products></Products>
      <Newsletter></Newsletter>
    </Layout>
  );
};

export default HomePage;

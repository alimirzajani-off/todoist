import React from "react";
import Article from "./article/article";
import { Footer } from "./footer/footer";
import Header from "./header/header";
import Nav from "./nav/nav";
import Section from "./section/section";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Section />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;

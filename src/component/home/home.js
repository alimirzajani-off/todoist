import React from "react";
import Article from "./article/article";
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
    </div>
  );
};

export default Home;

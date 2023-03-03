import React from "react";
import Social from "./social/Social";
import Data from "./Data/Data";
import ScrollDown from "./scrollDown/ScrollDown";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;

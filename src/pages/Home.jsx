import React from "react";
import "./Home.css";
import { ReactComponent as People } from "../img/people.svg";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__content-left">
          <h1>Find your friends</h1>
          <p>Find your friends and meet new people</p>
          <button>Get started</button>
        </div>

        <div className="home__content-right">
          <People className="home__people" />
        </div>
      </div>
    </section>
  );
}

export default Home;

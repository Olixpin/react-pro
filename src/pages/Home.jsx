import React from "react";
import "./Home.css";
import { ReactComponent as People } from "../img/people.svg";
import { useContext } from "react";
import { context } from "../context";
import { Link } from "react-router-dom";

function Home() {
  const { toggle, setToggle } = useContext(context);
  //   console.log(toggle);
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__content-left">
          <h1>Find your friends</h1>
          <p>Find your friends and meet new people</p>
          <button onClick={() => setToggle(!toggle)}>
            <Link replace to="/users">
              Get started
            </Link>
          </button>
        </div>

        <div className="home__content-right">
          <People className="home__people" />
        </div>
      </div>
    </section>
  );
}

export default Home;

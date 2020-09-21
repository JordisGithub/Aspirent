import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <section className="hero_text">
        <div className="hero_text__heading">What is Aspirent?</div>
        <div className="hero_text__highlight">
          Collaborate, invest, exchange, all in one place.
        </div>
        <div className="hero_text__paragraph">
          The platform for entrepreneurs, investors, industry experts &
          corporates to work together to solve real problems.
        </div>
        <button className="hero__button">get started</button>
      </section>
      <section className="hero_video">
        <iframe
          width="466"
          height="296"
          src="https://www.youtube.com/embed/0sWVDWwndu4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
}

export default Hero;

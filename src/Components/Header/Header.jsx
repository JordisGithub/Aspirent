import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597228681809x513873629664535900%2Fimage%2520%25286%2529.png?w=256&h=67&auto=compress&fit=crop&dpr=0.75"
        alt=""
        className="header__logo"
      />

      <ul className="header__icon-list">
        <li className="header__icon-item">
          <a
            href="https://www.linkedin.com/company/aspirent-group/"
            className="header-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li className="header__icon-item">
          <a
            href="https://twitter.com/aspirentg"
            className="header-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <button className="header__button">Login</button>
    </section>
  );
}

export default Header;

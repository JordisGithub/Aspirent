import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597228681809x513873629664535900%2Fimage%2520%25286%2529.png?w=256&h=67&auto=compress&fit=crop&dpr=0.75"
        alt=""
      />

      <ul className="icon-list">
        <li className="icon-item">
          <a
            href="https://www.linkedin.com/company/aspirent-group/"
            className="header-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li className="icon-item">
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

      <button>Login</button>
    </div>
  );
}

export default Header;

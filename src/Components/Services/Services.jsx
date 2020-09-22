import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <section className="services-grid">
        <div className="services-grid__item">
          <div className="services-grid__image">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597229665407x593272123335944800%2Fconnect-icon.png?w=384&h=343&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />
          </div>
          <div className="services-grid__title">Connect</div>
          <div className="services-grid__description">
            A network of entrepreneurs, industry experts and <br /> <br />
            corporates working together to solve real business problems.
          </div>
        </div>

        <div className="services-grid__item">
          <div className="services-grid__image">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597229710681x396598722615631100%2Fcollaborate-icon.png?w=384&h=343&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />
            <div className="services-grid__title">Collaborate</div>
            <div className="services-grid__description">
              Trade resources and work together with entrepreneurs, corporates
              and startups.
              <br /> <br />
              Create collaboration partnerships on our unique platform.
            </div>
          </div>
        </div>

        <div className="services-grid__item">
          <div className="services-grid__image">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597229728716x252933379400354530%2Fcocreate-icon.png?w=384&h=343&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />
            <div className="services-grid__title">Co-create</div>
            <div className="services-grid__description">
              Innovate with the help of entrepreneurs & corporates to solve real
              problems. <br /> <br /> create investment in startups where you
              see the highest return.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

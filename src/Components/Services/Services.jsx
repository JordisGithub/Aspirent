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
          <div>Connect</div>
          <div>
            A network of entrepreneurs, industry experts and corporates working
            together to solve real business problems.
          </div>
        </div>

        <div className="services-grid__item">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597229710681x396598722615631100%2Fcollaborate-icon.png?w=384&h=343&auto=compress&fit=crop&dpr=0.75"
            alt=""
            srcset=""
          />
          <div>Collaborate</div>
          <div>
            Trade resources and work together with entrepreneurs, corporates and
            startups. Create collaboration partnerships on our unique platform.
          </div>
        </div>

        <div className="services-grid__item">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597229728716x252933379400354530%2Fcocreate-icon.png?w=384&h=343&auto=compress&fit=crop&dpr=0.75"
            alt=""
            srcset=""
          />
          <div>Co-create</div>
          <div>
            Innovate with the help of entrepreneurs & corporates to solve real
            problems. create investment in startups where you see the highest
            return.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

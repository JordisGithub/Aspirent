import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <div className="team__title">Meet the team</div>
      <section className="team-grid">
        {/* single team memeber */}
        <div className="team-grid__member">
          <div className="team-grid__member-pic">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597232077723x528553948386296900%2FCameron%2520profile.png?w=256&h=258&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="team-grid__member-name">Cameron Johnson</div>
          <div className="team-grid__member-title">Founder and CEO</div>
        </div>

        {/* single team memeber */}
        <div className="team-grid__member">
          <div className="team-grid__member-pic">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597232158873x928354287319157200%2FBasel%2520profile.png?w=256&h=258&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="team-grid__member-name">Basel Juneidi</div>
          <div className="team-grid__member-title">Co-founder and COO</div>
        </div>

        {/* single team memeber */}
        <div className="team-grid__member">
          <div className="team-grid__member-pic">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597232178534x641262836393748900%2FNick%2520Profile.png?w=256&h=258&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="team-grid__member-name">Nick Shaw</div>
          <div className="team-grid__member-title">Co-founder and CTO</div>
        </div>

        {/* single team memeber */}
        <div className="team-grid__member">
          <div className="team-grid__member-pic">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597232891859x323026613942471360%2FCallum%2520photo.png?w=256&h=258&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="team-grid__member-name">Cameron Johnson</div>
          <div className="team-grid__member-title">Founder and CEO</div>
        </div>

        {/* single team memeber */}
        <div className="team-grid__member">
          <div className="team-grid__member-pic">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1597232900093x321188226408539700%2FAlberto%2520profile.png?w=256&h=258&auto=compress&fit=crop&dpr=0.75"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="team-grid__member-name">Cameron Johnson</div>
          <div className="team-grid__member-title">Founder and CEO</div>
        </div>
      </section>
    </div>
  );
}

export default Team;

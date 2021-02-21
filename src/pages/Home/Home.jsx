import React from "react";
import Banner from "../../components/Banner/Banner";
import FrontEndSkills from "../../components/FrontEndSkills/FrontEndSkills";
import HomeOverview from "../../components/HomeOverview/HomeOverview";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeOverview />
      <div className="container">
        <div className="row">
          <FrontEndSkills/>
         
          <div className="col s4 center-align">
            <i className="large material-icons">person</i>
            <h5 style={{ fontWeight: "bold" }}>Dev Tools</h5>
            <ul>
              <li>Agile Methodology</li>
              <li>Heroku</li>
              <li>Git</li>
              <li>Github</li>
              <li>Figma</li>
              <li>Robo 3T</li>
              <li>MongoDB Atlas</li>
              <li>PostMan</li>
              <li>Kanban Board</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

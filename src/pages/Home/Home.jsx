import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeOverview from "../../components/HomeOverview/HomeOverview";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeOverview />
      <div className="container">
        <div className="row">
          <div className="col s4 center-align">
            <i className="large material-icons">tab</i>
            <h5 style={{ fontWeight: "bold" }}>Front End</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>APIs</li>
              <li>JSON</li>
              <li>AJAX</li>
            </ul>
          </div>
          <div className="col s4 center-align">
            <i className="large material-icons">open_in_browser</i>
            <h5 style={{ fontWeight: "bold" }}>Back End</h5>
            <ul>
              <li>Templating Engines</li>
              <li>Sessions</li>
              <li>Writing Tests</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Creating APIs</li>
              <li>MVC</li>
              <li>ORM (Sequelize)</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
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

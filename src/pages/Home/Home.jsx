import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <div className="container">
          <div className="row">
            <div className="col s3"> </div>
            <div style={{ fontWeight: "bold" }} className="col s9 theHeading">
              {" "}
              Hello, World! <br />
              <br /> My name is Daniel Martinez.
            </div>
          </div>
        </div>
      </div>
      <h4 className="center-align">Skills Overview</h4>
      <p className="center-align">
        I have more than 6 months experience building rich applications. Below
        is a quick overview <br /> of my main technical skill sets and tools I
        have used. Want to find out more about my experience?{" "}
        <a href="https://docs.google.com/document/d/1Y032gC5r-Xg9yC9JL9LPpukUcwriwOar9rTpsvwfkt4/edit">
          <strong>Check out my resume.{" "}</strong>
        </a>
      </p>
      <br />
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
              <li>Heroku</li>
              <li>Git</li>
              <li>Github</li>
              <li>Figma</li>
              <li>Robo 3T</li>
              <li>MongoDB Atlas</li>
              <li>PostMan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

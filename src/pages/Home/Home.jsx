import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <div className="container">
          <div className="row">
            <div className="col s3"> img here</div>
            <div className="col s9"> other content here</div>
          </div>
        </div>
      </div>
      <h4 className="center-align">Skills Overview</h4>
      <p className="center-align">
        I have more than 6 months experience building rich applications. Below
        is a quick overview <br /> of my main technical skill sets and tools I
        use. Want to find out more about my experience? Check out my resume.
      </p>
      <br />
      <div className="container">
        <div className="row">
          <div className="col s4 center-align">
            <i class="large material-icons">tab</i>
          </div>
          <div className="col s4 center-align">
            <i class="large material-icons">open_in_browser</i>
          </div>
          <div className="col s4 center-align">
            <i class="large material-icons">person</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

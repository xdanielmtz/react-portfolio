import React from "react";
import empDir from "./employee-directory-ss.png"; 
import safeMusic from "./safe-music-lovers-ss.png";
import footOrFut from"./football-or-futbol-ss.png";
import "./portfolio.css"


const Portfolio = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="container">
        <div className="row">
          <div className="col s6">
              <h3 style={{ fontWeight: "bold" }}>Employee Directory</h3>
              <br/>
              <a className="linkTag" href="https://xdanielmtz.github.io/employee-directory/">Deployed Site</a>
              <br/>
              <br/>
              <br/>
              <a className="linkTag" href="https://xdanielmtz.github.io/employee-directory/">Repository Page</a>
          </div>
          <div className="col s6">
              <img src={empDir} alt="blah" height="500px" width="800px" style={{border:"1px solid #000000"}} />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col s6">
              <h3 style={{ fontWeight: "bold" }}>Safe Music Lovers </h3>
              <br/>
              <a className="linkTag" href="https://ayannaaziz.github.io/Project-1/">Deployed Site</a>
              <br/>
              <br/>
              <br/>
              <a className="linkTag" href="https://github.com/xdanielmtz/Project-1">Repository Page</a>
          </div>
          <div className="col s6">
              <img src={safeMusic} alt="blah" height="500px" width="800px" style={{border:"1px solid #000000"}} />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col s6">
              <h3 style={{ fontWeight: "bold" }}>Football or Futbol</h3>
              <br/>
              <a className="linkTag" href="https://football-or-futbol.herokuapp.com/">Deployed Site</a>
              <br/>
              <br/>
              <br/>
              <a className="linkTag" href="https://github.com/xdanielmtz/football-or-futbol">Repository Page</a>
          </div>
          <div className="col s6">
              <img src={footOrFut} alt="blah" height="500px" width="800px" style={{border:"1px solid #000000"}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

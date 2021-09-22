import React from "react";
import empDir from "./employee-directory-ss.png";
import afs from "./afs.png";
import safeMusic from "./safe-music-lovers-ss.png";
import footOrFut from "./football-or-futbol-ss.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h3 style={{ fontWeight: "bold" }}>Atlanta Fandom Social </h3>
            <br />
            <a
              className="linkTag"
              href="https://atlfandomsocial.herokuapp.com/"
            >
              Deployed Site
            </a>
            <br />
            <br />
            <br />
            <a
              className="linkTag"
              href="https://github.com/adrianalbr/Atlanta-Fandom-Social"
            >
              Repository Page
            </a>
            <br />
            <p id="afsDescription">
              A page where all things Atlanta Fandom can come together! Users
              can create an account and upload posts as well as interact with
              other users posts by saving them. Application is still in
              development.
            </p>
          </div>

          <div className="col s6">
            <img
              src={afs}
              alt="blah"
              height="500px"
              width="800px"
              style={{ border: "1px solid #000000" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h3 style={{ fontWeight: "bold" }}>Employee Directory</h3>
            <br />
            <a
              className="linkTag"
              href="https://xdanielmtz.github.io/employee-directory/"
            >
              Deployed Site
            </a>
            <br />
            <br />
            <br />
            <a
              className="linkTag"
              href="https://github.com/xdanielmtz/employee-directory"
            >
              Repository Page
            </a>
            <br />
            <p id="directoryDescription">
              A page containing a list of 50 employees whom which can be sorted
              alphabetically. These employees can also be searched by their
              phone number.
            </p>
          </div>
          <div className="col s6">
            <img
              src={empDir}
              alt="blah"
              height="500px"
              width="800px"
              style={{ border: "1px solid #000000" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h3 style={{ fontWeight: "bold" }}>Safe Music Lovers </h3>
            <br />
            <a
              className="linkTag"
              href="https://ayannaaziz.github.io/Project-1/"
            >
              Deployed Site
            </a>
            <br />
            <br />
            <br />
            <a
              className="linkTag"
              href="https://github.com/xdanielmtz/Project-1"
            >
              Repository Page
            </a>
            <br />
            <p id="safeMusicDescription">
              Music lovers can search for concerts or events based in city
              input. The event will also be met with up to date COVID info for
              that city along with a small gif that acts as a recommendation
              whether or not for you to attend said event. Users are also able
              to click on their event and will be redirected to the ticketmaster
              website where they can order tickets.
            </p>
          </div>
          <div className="col s6">
            <img
              src={safeMusic}
              alt="blah"
              height="500px"
              width="800px"
              style={{ border: "1px solid #000000" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h3 style={{ fontWeight: "bold" }}>Football or Futbol</h3>
            <br />
            <a
              className="linkTag"
              href="https://football-or-futbol.herokuapp.com/"
            >
              Deployed Site
            </a>
            <br />
            <br />
            <br />
            <a
              className="linkTag"
              href="https://github.com/xdanielmtz/football-or-futbol"
            >
              Repository Page
            </a>
            <br />
            <p id="footballDescription">
              An application made for video game lovers, more specifically
              futbol and football. Being the first of its kind, this application
              compares both the stats of a Madden football player against that
              of a soccer player from FIFA. Their stats are compared via a
              database that has up to date data from the 2019/2020 season. Apart
              from selecting a player that is already in the database, the user
              can create their own with their desired stats and have them go
              head to head against an existing player. This new created player
              will then be saved in the database for future use.
            </p>
          </div>
          <div className="col s6">
            <img
              src={footOrFut}
              alt="blah"
              height="500px"
              width="800px"
              style={{ border: "1px solid #000000" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

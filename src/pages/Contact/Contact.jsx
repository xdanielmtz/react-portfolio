import React from "react";
import "./contact.css";
import resume from "./Resume.pdf";

const Contact = () => {
  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1 style={{ fontWeight: "bold" }}>Contact Me!</h1>
            <ul>
              <li>
                <a className="theLinks" href="https://github.com/xdanielmtz">
                  Github
                </a>
              </li>
              <li>
                <a
                  className="theLinks"
                  href="https://www.linkedin.com/in/daniel-martinez-2130b81b5/"
                >
                  LinkdIn
                </a>
              </li>
              <li>
                <a className="theLinks" href={resume} target="blank">
                  Resume
                </a>
              </li>
              <li>
                <p className="myInfo"> 678-650-4147</p>
                <p className="myInfo">xdanielmtz@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

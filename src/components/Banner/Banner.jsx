import React from "react";

const Banner = () => {
  return (
    <>
      <div id="homeContainer">
        <div className="container">
          <div className="row">
            <div style={{ fontWeight: "bold" }} className="col s12 theHeading">
              {" "}
              Hello, World! <br />
              <p id="name">My name is Daniel Martinez.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

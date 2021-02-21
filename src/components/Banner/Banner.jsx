import React from "react";

const Banner = () => {
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
    </>
  );
};

export default Banner;

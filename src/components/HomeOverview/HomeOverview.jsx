import React from "react";

const HomeOverview = () => {
  return (
    <>
      <div className="container containerOverview">
        <div className="row">
          <div className="col s12 columnOverview">
            <h4 className="center-align">Skills Overview</h4>
            <p className="center-align">
              I have more than 6 months experience building rich applications.
              Below is a quick overview <br /> of my main technical skill sets
              and tools I have used. Want to find out more about my experience?{" "}
              <a href="https://docs.google.com/document/d/1Y032gC5r-Xg9yC9JL9LPpukUcwriwOar9rTpsvwfkt4/edit">
                <strong>Check out my resume. </strong>
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOverview;

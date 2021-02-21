import React from "react";
import BackEndSkills from "../../components/BackEndSkills/BackEndSkills";
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
          <FrontEndSkills />
          <BackEndSkills />
         
        </div>
      </div>
    </>
  );
};

export default Home;

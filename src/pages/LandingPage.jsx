import React, { useRef, useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import SkillSet from "../components/SkillSet";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const LandingPage = ({show}) => {
  
  return (
    <div>
      <Jumbotron show={show} />
      <hr style={{ height: "2px" ,boxShadow: "0 0 25px white", width:"85%", margin:"auto", }}></hr>
      <AboutMe />
      <hr style={{ height: "2px" ,boxShadow: "0 0 25px white", width:"85%", margin:"auto", marginBottom: "40px"}}></hr>
      <SkillSet show={show} />
      <hr style={{ height: "2px" ,boxShadow: "0 0 25px white", width:"85%", margin:"auto",}}></hr>
      <Projects />
    </div>
  );
};

export default LandingPage;

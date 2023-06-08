import picture from "../assets/betha4.png";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { ImMail4, ImWhatsapp } from "react-icons/im";

const AboutMe = () => {
  const [sentence, setSentence] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const secondControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      secondControls.start("visible");
    } else {
      secondControls.stop("visible");
    }
    // List of sentences
  }, [isInView]);
  useEffect(() => {
    let i = 0;
    let counter;
    function typeNow() {
      const words =
        "Hi I am F. Bethavianus Bayu Dewanto, people love to call me Betha. I am a Fullstack Web Developer using HTML, CSS, Javascript and ExpressJs/NodeJs to develop a website as well as ReactJs, Sequelize, Bootstrap, Tailwind, etc as the Framework. Please contact me for further information about me. <br /> :)";
      let word = words.split("");
      let char = "";
      let loopTyping = function () {
        if (word.length > 0) {
          document.getElementById("type-about").innerHTML = char += word.shift();
        } else {
          document.getElementById("type-about").innerHTML = char + ``;
          return false;
        }
        counter = setTimeout(loopTyping, 40);
      };
      loopTyping();
    }
    typeNow();
  }, []);
  return (
    <div
      className=" about pt-6"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#272727",}}
    >
      <p className="relative text-white text-3xl font-semibold font-sans mb-5" style={{zIndex: 999999}}>ABOUT ME</p>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -15 },
          visible: { opacity: 1 , y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25, bounce: 30 }}
      >
        <img ref={ref} src={picture} className=" relative w-44 h-44 rounded-full object-cover" alt="" style={{zIndex: 999999}}/>
      </motion.div>
      <div className=" absolute w-32 h-32 rounded-full animate-ping" style={{border: "1px white solid", boxShadow: "0 0 5px white" ,marginTop: "75px", zIndex: 0}}>
            
        </div>
      <div
      className={"about-box relative"}
        style={{
          display: "flex",
          alignItems: "flex-start",
          zIndex: 99999,
          marginTop: "30px",
          padding: "20px",
          borderRadius: "5%",
          backgroundColor: "#303030",
          boxShadow: "0 0 5px #343434"
        }}
      >
        
        <div className="text-white" style={{ display: "flex", alignItems: "flex-start" }}>
          <p style={{ fontSize: "19px", textAlign: "center" }}>
            <span id="type-about" style={{WebkitTextStroke: "0.5px black"}}> </span>
            <span class="typing-icons">_</span>
          </p>
        </div>
        <div></div>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "50%"}}>
      <button
        className=" icons-hover btn-resume text-white mt-6 mb-10 hover:border-green-400 hover:border-2 hover:bg-transparent hover:text-green-400 bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400  rounded-lg text-sm px-5 py-2.5 text-center mr-2 font-bold  hover:transition-all duration-300"
        onClick={() => window.open("mailto:fransiskusbetha@gmail.com")}
        target="_blank"
        style={{ boxShadow: "0px 0px 20px #4ade80", display: "flex", alignItems: "center" }}
        rel="noopener noreferrer"
      >
        <ImMail4  size={30} style={{marginRight: "5px"}} /> <p className="text-lg">Send Email</p>
      </button>
      <button
        className=" icons-hover btn-resume text-white mt-6 mb-10 hover:border-green-400 hover:border-2 hover:bg-transparent hover:text-green-400 bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400  rounded-lg text-sm px-5 py-2.5 text-center mr-2 font-bold  hover:transition-all duration-300"
        onClick={() => window.open("https://wa.me/628983428766")}
        target="_blank"
        style={{ boxShadow: "0px 0px 20px #4ade80", display: "flex", alignItems: "center" }}
        rel="noopener noreferrer"
      >
        <ImWhatsapp size={30} style={{marginRight: "5px", }} /> <p className="text-lg">WA Me</p>
      </button>
      {/* <p><button onClick={() => window.open("mailto:fransiskusbetha@gmail.com")} target="_blank" style={{color: "white"}} rel="noopener noreferrer">Contact me</button></p> */}
    </div>
    </div>
  );
};

export default AboutMe;

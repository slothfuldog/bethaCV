import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import picture1 from "../assets/betha.png";

const Jumbotron = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});
  const mainControls = useAnimation();
  const secondControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      secondControls.start("visible")
    }else{
      secondControls.stop("visible")
      
    }
    // List of sentences
  }, [isInView]);
  return (
    <div className="  mx-auto" style={{display: "flex", justifyContent:"cneter", alignItems: "center", height: "700px"}}>
      <div style={{ display: "flex", alignItems: "center", height: "500px", width: "100%" }}>
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
        >
          <div className="hide" style={{ width: "600px", marginRight: "5%" }}>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <img
                className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover"
                src={picture1}
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 0 10px white",
                  width: "350px",
                  height: "400px",
                  borderRadius: "5%",
                }}
              ></img>
            </motion.div>
          </div>
          <div
            className="text-container"
          >
            <div className="" style={{width: "100%"}}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="text-5xl font-bold text-white jumbo-top" ref={ref}>
                Hi, i'm Betha.
              </p>
            </motion.div>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
              layout
            >
              <pre className="text-4xl text-white mobile jumbo-bottom" ref={ref}>
                I'm a<pre></pre>
                <span className=" text-green-400 font-bold mobile" style={{}}>
                  <motion.div
                    variants={{
                      hidden: { textShadow: "" },
                      visible: { textShadow: "0 0 30px #4ade80" },
                    }}
                    initial="hidden"
                    animate={"visible"}
                    transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse"}}
                  >
                    {" "}
                    Full Stack <span>Developer.</span>{" "}
                  </motion.div>
                </span>
              </pre>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

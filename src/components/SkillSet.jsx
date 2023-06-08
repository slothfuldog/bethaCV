import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SkillSet = () => {
  useEffect(() => {
    const words = ["Full Stack Engineer", "Backend Engineer", "Frontend Engineer"];
    let i = 0;
    let counter;
    function typeNow() {
      let word = words[i].split("");
      let loopTyping = function () {
        if (word.length > 0) {
          document.getElementById("text").innerHTML += word.shift();
        } else {
          counter = setTimeout(deleteNow(), 2000);
          return false;
        }
        counter = setTimeout(loopTyping, 110);
      };
      loopTyping();
    }
    function deleteNow() {
      let word = words[i].split("");
      var loopDeleting = function () {
        if (word.length > 0) {
          word.pop();
          document.getElementById("text").innerHTML = word.join("");
        } else {
          if (words.length > i + 1) {
            i++;
          } else {
            i = 0;
          }
          typeNow();
          return false;
        }
        counter = setTimeout(loopDeleting, 50);
      };
      loopDeleting();
    }
    typeNow();
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // List of sentences
  }, [isInView]);
  return (
    <div style={{height: "600px"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className=" text-4xl font-bold text-white" ref={ref}>
            SKILL SET
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <pre className="text-3xl font-bold " style={{ color: "#0A0A0A" }}>
              {" "}
              <span id="text" className="text-3xl font-bold text-green-400" ref={ref}>
                {" "}
              </span>
            </pre>
          </div>
          <div></div>
        </motion.div>
        <div className=" mt-40" >
        <motion.div
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
        <figure class="scene" ref={ref}>
          <div class="cube">
            <div class="cube-face front text-white">ReactJS</div>
            <div class="cube-face back text-white">ExpressJS</div>
            <div class="cube-face left text-white">HTML</div>
            <div class="cube-face left-top text-white">Postman</div>
            <div class="cube-face left-bottom text-white">github</div>
            <div class="cube-face right text-white">CSS</div>
            <div class="cube-face right-top text-white">Nodejs</div>
            <div class="cube-face right-bottom text-white">Git</div>
            <div class="cube-face top text-white">Javascript</div>
            <div class="cube-face top-right text-white">Tailwind</div>
            <div class="cube-face top-left text-white">Sequelize</div>
            <div class="cube-face bottom text-white">MySql</div>
            <div class="cube-face bottom-right text-white">Bootstrap</div>
            <div class="cube-face bottom-left text-white">Chakra UI</div>
          </div>
        </figure>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;

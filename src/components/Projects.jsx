import picture2 from "../assets/Thumbnail3.png";
import picture3 from "../assets/Thumbnail4.png";
import picture4 from "../assets/thumbnail2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";
import { ImDisplay, ImGithub } from "react-icons/im";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Projects = () => {
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
    <div
      className="pt-6 projects"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#272727",
        height: "740px",
      }}
    >
      <h1 className="text-3xl text-white mt-7">PROJECTS</h1>
      <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
      <div className="container mt-20" ref={ref} style={{ backgroundColor: "#272727" }}>
        <Swiper
          navigation={false}
          initialSlide={1}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={false}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              class=" max-h-full  border rounded-lg shadow "
              style={{
                width: "500px",
                backgroundColor: "#161616",
                borderColor: "#101010",
                boxShadow: "0 0 10px #101010",
              }}
            >
              <a href="https://github.com/slothfuldog/JCWDOL00801" target="_blank">
                <img class="rounded-t-lg" src={picture2} alt="" />
              </a>
              <div class="p-5">
                <a href="https://github.com/slothfuldog/JCWDOL00801" target="_blank">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-400 ">
                    RentHaven (Property Renting)
                  </h5>
                </a>
                <p
                  class="mb-3 font-normal text-white dark:text-gray-400"
                  style={{ height: "80px" }}
                >
                  Renthaven is a renting property web app which allows users to rent property
                  especially resort and hotel as well as register users' property in order to be
                  rented by other users.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <a
                    href="https://github.com/slothfuldog/JCWDOL00801"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <ImGithub color="white" size={30} style={{ marginRight: "10px" }} />
                    Github
                  </a>
                  <a
                    href="https://jcwdol00801.purwadhikabootcamp.com/"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <ImDisplay color="white" size={30} style={{ marginRight: "10px" }} /> Live Web
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{
                width: "500px",
                backgroundColor: "#161616",
                borderColor: "#101010",
                boxShadow: "0 0 10px #101010",
              }}
            >
              <a href="https://github.com/slothfuldog/bethaCV" target="_blank">
                <img class="rounded-t-lg" src={picture3} alt="" />
              </a>
              <div class="p-5">
                <a href="https://github.com/slothfuldog/bethaCV" target="_blank">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-400 ">
                    F. Bethavianus Bayu Dewanto's Resume Site
                  </h5>
                </a>
                <p class="mb-3 font-normal text-white " style={{ height: "80px" }}>
                  A resume site which is made by using react and tailwind css and other libraries.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://github.com/slothfuldog/bethaCV"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <ImGithub color="white" size={30} style={{ marginRight: "10px" }} />
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{
                width: "500px",
                backgroundColor: "#161616",
                borderColor: "#101010",
                boxShadow: "0 0 10px #101010",
              }}
            >
              <a href="https://github.com/slothfuldog/cashierApp" target="_blank">
                <img class="rounded-t-lg" src={picture4} alt="" />
              </a>
              <div class="p-5">
                <a href="https://github.com/slothfuldog/cashierApp" target="_blank">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-400 ">CashierApp</h5>
                </a>
                <p class="mb-3 font-normal text-white " style={{ height: "80px" }}>
                  CashierApp is a web app which helps cashier to record and create transactions
                  espiecially for restaurant and café.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://github.com/slothfuldog/cashierApp"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <ImGithub color="white" size={30} style={{ marginRight: "10px" }} />
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </motion.div>
    </div>
  );
};

export default Projects;

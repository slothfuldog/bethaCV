import picture2 from "../assets/Thumbnail3.png";
import picture3 from "../assets/Thumbnail4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";
import { ImDisplay, ImGithub } from "react-icons/im";
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const Projects = () => {
  return (
    <div
      className="pt-6 projects"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#272727",
        height: "740px"
      }}
    >
      <h1 className="text-3xl text-white">PROJECTS</h1>
      <div className="container mt-28" style={{backgroundColor: "#272727",}}>
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
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class=" max-h-full  border rounded-lg shadow " style={{width: "500px", backgroundColor: "#161616", borderColor: "#101010", boxShadow: "0 0 10px #101010"}}>
            <a href="https://github.com/slothfuldog/JCWDOL00801" target="_blank">
              <img class="rounded-t-lg" src={picture2} alt="" />
            </a>
            <div class="p-5">
              <a href="https://github.com/slothfuldog/JCWDOL00801" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-400 dark:text-white">
                  RentHaven (Property Renting)
                </h5>
              </a>
              <p class="mb-3 font-normal text-white dark:text-gray-400" style={{height: "80px"}}>
                A renting property web app which allows users to rent property especially resort and hotel as well as
                register users' property in order to be rented by other users.
              </p>
              <div style={{display: "flex", justifyContent: "space-between"}}>
              <a
                href="https://github.com/slothfuldog/JCWDOL00801"
                target="_blank"
                class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <ImGithub color="white" size={30} style={{ marginRight: "10px" }} />Github
              </a>
              <a
                href="https://jcwdol00801.purwadhikabootcamp.com/"
                target="_blank"
                class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <ImDisplay color="white" size={30} style={{ marginRight: "10px" }} /> Live Web
              </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{width: "500px", backgroundColor: "#161616", borderColor: "#101010", boxShadow: "0 0 10px #101010"}}>
            <a href="https://github.com/slothfuldog/bethaCV" target="_blank">
              <img class="rounded-t-lg" src={picture3} alt="" />
            </a>
            <div class="p-5">
              <a href="https://github.com/slothfuldog/bethaCV" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-400 ">
                  F. Bethavianus Bayu Dewanto's Resume Site
                </h5>
              </a>
              <p class="mb-3 font-normal text-white " style={{height: "80px"}}>
                A resume site which is made by using react and tailwind css and other libraries.
              </p>
              <a
                href="https://github.com/slothfuldog/bethaCV"
                target="_blank"
                class="inline-flex items-center px-3 py-2 text-lg hover:bg-gray-800 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <ImGithub color="white" size={30} style={{ marginRight: "10px" }} />Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Projects;

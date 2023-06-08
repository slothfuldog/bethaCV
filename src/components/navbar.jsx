import { useNavigate } from "react-router-dom";
import { ImLinkedin, ImGithub, ImTwitter, ImFacebook2 } from "react-icons/im";
import Instagram from "../assets/instagram.png";
import { useEffect, useState } from "react";

const Navbar = ({show}) => {
  let navigate = useNavigate();
  let cvLink =
    "https://doc-0c-0g-docs.googleusercontent.com/docs/securesc/77g4ve3u3154vrdgb2l5ef4j97jb9msb/8dd0nt2fjmqsn0jlhetor9g30boeb88j/1685520675000/09588613913935785813/09588613913935785813/11w2F_OAJz4WZM5uIRHaJniU1yGqJn4tj?e=download&ax=ADWCPKAVbwu07yw5vpQbpqKXPiPCongDHn2rvxtay1ZpcC-k0ntJXplv7J9z1IijA605904St4tedtmkBWshnOSrpbZ5LRxbEsb-exQxwr_riYYsFCzYYAxios9G_UqcUYCSOuUhhMpxifPZlJyXWLkHGEsoEyQrxV_IDVfncDXHCWsSIyFnsird4ffCd7DsNF2n_q6ZX1J7TWFw0vfzK79aFXvlhrgjjxCLbjyjvWaWbrjvqt1pLS2EWqangd5kwBTSoDDhuDQ0rbFpJ6NErXGwdYmVLB_AnnMsD3aLdhYHSgSLPI5vKKQDd4FcAiLrKlkAma15GC8rB8P1xtbRKk6H22CZXJBTEAaZYMlqhI8gRmv2FR6AAt4pGdFI4WVa0dtPUkcYeB5q1ZtHZPr8_KhZSj9Py1APGQImORs7q-7ZSr3txAVfimoVSb-eyBtTtHIf4SgFkJNFZ0lLot9jv8CNMdTtjj4U5CpDCe07C80A9vPR3l-8Dcp56fCBBzHSoPpPrVi3hUaB-T2wnJ56fxSZF5uoN9pdkTW1SBLEi-O_QFabuNjvVXN4whfMpgxTHr40MtR717-1XjSy9Gm8fJwgpzfCs46Iw8NEVe_H7FOib-QWybizLiHS3mmnpEz-telRlnm2bIejT6uyR7PAyWpSrm4qTnFXK4rouu3ldlJoxsEpXaVqpPnxN7x9d1iUbBSO9-zEzv-W6vWPn8KiaO2HqKP2ne53msgsmEyUBqJVFY8RuiWhNaSkWn2jyl9F3ttAaCKoNDztxwGizEJZhr6__u5NG7LU7fYdA7AtFJTkZUM6dsLoTmyxCzYh50eSsco46hiPyjTajOYZWI4zRJgn3s5an51i0m9hqQhJtLGymry_MywuQAMvAujXCtd_3faePxCXcC5adWt2RRexUe4hwmkEj-gB2h6V3YerqMzNa5dWh_jhYIzw8mFxWWsE5a3YhDeKkWnBBuaWqb6G-1W2qKpV3Grg2N86URN3p81zf6en-Zv3mHWY1h-6AA1KFrpklN-Eg4cYca-5blSE8yBg8wN2BC_PEpKSZIELmzRWceN-idE9&uuid=420708e8-1730-4581-b42b-a9f09c4fd333&authuser=0&nonce=nfjlsh5e8b85a&user=09588613913935785813&hash=75j2fic1ava179h1a646m26lkm7fb5hc";
  const [checkShow, setCheckShow] = useState(true)
  return (
    <nav className={`border-white nav-master shadow-white ${!show && "nav-master-hidden"}`} style={{position: "fixed", width: "100%", zIndex:99999999}}>
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 nav ${
          !show && "nav-hidden"
        }`}
      >
        {/* <a href="/" className="flex items-center justify-center">
        <span className=" text-2xl mr-2 pt-1" style={{fontFamily: "'Rubik Puddle', cursive", fontWeight: "700"}}>BETHA</span>
    </a> */}
        <a
          href="CV Betha.pdf"
          download="CV Betha.pdf"
          class=" btn-resume shadow-green-400 text-green-400 hover:text-white border border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400  rounded-lg text-sm px-5 py-2.5 text-center mr-2 font-bold  hover:transition-all duration-300"
          style={{ boxShadow: "0px 0px 20px #4ade80" }}
        >
          My resume
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className=" inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:flex md:w-auto transition-all duration-300"
          id="navbar-default"
        >
          <ul className=" transition-all duration-300 font-medium flex flex-row justify-evenly p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
            <li>
              <a
                href="https://www.linkedin.com/in/bethavianus/"
                target="_blank"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0  change-linkedin-color"
                aria-current="page"
              >
                <ImLinkedin color="white" size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/slothfuldog"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 "
                target="_blank"
              >
                <ImGithub color="white" size={30} style={{ marginLeft: "10px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/slothfuldogs"
                target="_blank"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0  dark:hover:text-white md:dark:hover:bg-transparent  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                  style={{ marginLeft: "10px" }}
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(29,161,242)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/slothfuldogs/"
                target="_blank"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0  md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <img src={Instagram} id="ig" style={{ height: "35px", width: "40px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

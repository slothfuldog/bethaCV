import logo from './logo.svg';
import './index.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import "./styles/input.css"
import Navbar from './components/navbar';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./styles/swiper.css"

function App() {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
  });
  return (
    <div className="App">
      <Navbar show={show}/>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

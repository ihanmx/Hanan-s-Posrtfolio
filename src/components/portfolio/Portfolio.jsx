import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./portfolio.css";
import enviAI from "../../assets/enviAI.png";
import DSC from "../../assets/DSC.png";
import toDoList from "../../assets/toDolist.png";
import Weather from "../../assets/Weather.png";
import RouteMate from "../../assets/RouteMate.png";
import LemonSlice from "../../assets/lemon-sliceImg.png";
import Procode from "../../assets/ProcodeImg.png";
import Buggy from "../../assets/Buggy.png";
import EnviAIDesign from "../../assets/EnviAIDesign.png";
import DreamSmartWatch from "../../assets/DreamSmartWatch.png";
import EradahImg from "../../assets/eradahImg.png";
import KShirt from "../../assets/KShirt.png";

const ResponsiveSwiper = () => {
  const cards = [
    {
      id: 1,
      content: (
        <div className="contentDiv">
          <h3>EnviAI</h3>
          <p>React.js,MUI,Firebase,Fabric.js,APIs</p>
          <img className="cardImg" src={enviAI} />
          <a
            href="https://drive.google.com/file/d/1C-pjiTBBXGcIwzQB6Aay8KuzFL_SCNhe/view?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="contentDiv">
          <h3>Data Since Club website</h3>
          <p>PHP&JS&HTML&CSS</p>
          <img className="cardImg" src={DSC} />
          <a
            href="https://drive.google.com/file/d/1K0JsdnsyDiScsi0Bskm1urTi4C6mc7Mc/view?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },

    {
      id: 3,
      content: (
        <div className="contentDiv">
          <h3> React To-Do List </h3>
          <p>Hooks,contextProviders-States-CRUD</p>
          <img className="cardImg" src={toDoList} />
          <a href="https://hanan-to-do-list.netlify.app/" class="view-more">
            View More
          </a>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="contentDiv">
          <h3>RouteMate</h3>
          <p>PHP&JS&HTML&CSS</p>
          <img className="cardImg" src={RouteMate} />
          <a
            href="https://drive.google.com/file/d/1D2lmA1ws8DIzAkClQjwarWJWJme8l91y/view?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="contentDiv">
          <h3> React Wheather App</h3>
          <p>API,Redux,Reducers</p>
          <img className="cardImg" src={Weather} />
          <a href="https://weather-app-byhanan.netlify.app/" class="view-more">
            View More
          </a>
        </div>
      ),
    },

    {
      id: 6,
      content: (
        <div className="contentDiv">
          <h3> Lemon Slice</h3>
          <p>HTML&CSS</p>
          <img className="cardImg" src={LemonSlice} />
          <a href="https://ihanmx.github.io/lemon-slice/" class="view-more">
            View More
          </a>
        </div>
      ),
    },

    {
      id: 7,
      content: (
        <div className="contentDiv">
          <h3>Procode</h3>
          <p>HTML&CSS</p>
          <img className="cardImg" src={Procode} />
          <a href="https://ihanmx.github.io/Procode/" class="view-more">
            View More
          </a>
        </div>
      ),
    },
  ];

  const cards1 = [
    {
      id: 1,
      content: (
        <div className="contentDiv">
          <h3>K-shirt</h3>
          <p>Children clothes store UI/UX </p>
          <img className="cardImg" src={KShirt} />
          <a
            href="https://www.figma.com/proto/PuUanvKKEz0A2en0Ry6qbS/K-shirt?page-id=140%3A1477&node-id=146-3575&viewport=734%2C127%2C0.04&t=XxmrM9lo7KuFsAHZ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=146%3A3575"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="contentDiv">
          <h3>Eradah hospital UI/UX project</h3>
          <p>applecation's user interfaces improvement </p>
          <img className="cardImg" src={EradahImg} />
          <a
            href="https://www.figma.com/proto/WwHe63LFpi0MVDowh4KvQ0/Eradah-internship?page-id=2%3A2&node-id=161-2545&p=f&viewport=-25%2C-3816%2C0.05&t=ZlJUH4FWKm1Wekk8-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=161%3A2545"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },

    {
      id: 3,
      content: (
        <div className="contentDiv">
          <h3>Buggy</h3>
          <p>UI/UX of responsive bugs solving website </p>
          <img className="cardImg" src={Buggy} />
          <a
            href="https://docs.google.com/presentation/d/1n8WnPFHtVOg2kX6ytOGp5qVrrFY9P93znWr7UlQGUhE/edit?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="contentDiv">
          <h3>EnviAI</h3>
          <p>UI/UX of products Designing wepsite</p>
          <img className="cardImg" src={EnviAIDesign} />
          <a
            href="https://drive.google.com/file/d/1KEKAkE0DSTTNa7uikysaEOtdnEymo7I4/view?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },

    {
      id: 5,
      content: (
        <div className="contentDiv">
          <h3>Dream Smartwatch</h3>
          <p>UI/UX Mobile & Desktop smartwatch store website</p>
          <img className="cardImg" src={DreamSmartWatch} />
          <a
            href="https://drive.google.com/file/d/1y3eDFlcYFcrqB-9yOhAE826ne-xuCIYi/view?usp=sharing"
            class="view-more"
          >
            View More
          </a>
        </div>
      ),
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My projects</span>

      <h3 style={{ marginLeft: "30px" }}>Programming</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enables looping
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 2 }, // Medium screens
          1024: { slidesPerView: 3 }, // Large screens
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="cardDiv">{card.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 style={{ marginLeft: "30px" }}>Designing</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enables looping
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 2 }, // Medium screens
          1024: { slidesPerView: 3 }, // Large screens
        }}
      >
        {cards1.map((card1) => (
          <SwiperSlide key={card1.id}>
            <div className="cardDiv">{card1.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResponsiveSwiper;

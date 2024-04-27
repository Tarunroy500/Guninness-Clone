"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper/modules";
const carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [RealIndex, setRealIndex] = useState(0);
  const [data, setdata] = useState([
    {
      i: 0,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/2rXLSXctpdlbbzvZxepuoW/ca85ac5b0f619f7a6c75a5c4c3a93c27/_Guinness_Smooth___crophero.jpeg?fm=avif&w=1920&q=60",
      head: "GUINNESS HOP HOUSE 13",
      desc: "Crust full flavoured lager packed full of happy goodness",
      tag:"LARGER"
    },
    {
      i: 1,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/jb4Bun8BuXIpBx66l8OAq/b41bbe3af43b7a39da1fbc0ec9e05a6a/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItcHJkIiwia2V5IjoiRENIL2ltYWdlL2pwZWcvMTA4MDE1NjgvTElHSFQgQlVaWl9zbWFsbC5qcGciLCJlZGl0cyI6?fm=avif&w=1200&q=60",
      head: "GUINNESS DRAUGHT",
      desc: "There is nothing on this planet like a pint of the black stuff",
      tag:  "STOUT"
    },
    {
      i: 2,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/2Y8vmWYAz8dkGeBPcNNseL/f9cf51d855b6a0f13219ca66a441d8ea/Hop_House_13_Lifestyle_Shot_On_Trade_Shot_03_11097_9x16?fm=avif&w=750&q=60",
      head: "GUINNESS 0.0",
      desc: "The Guinness net everything except the alcohol",
      tag: "NON-ALCOHOLIC"
    },
    {
      i: 3,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/4QM6zI2J5nQohSjiYrfRfF/25c29328050da77447e721e09e513c7e/Fes_Fire_Asia_6sheet_Min?fm=avif&w=1200&q=60",
      head: "GUINNESS FOREIGN EXTRA STOUT",
      desc: "A full flavoured stoud born of a thirst for adventure",
      tag:  "STOUT"
    },
    {
      i: 4,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/4BT66woW4DEndaQnu9puOG/1d8bea16f8c80da975432168c246dc85/Img_2892_R2_1440?fm=avif&w=1920&q=60",
      head: "GUINNESS COLD BREW COFFEE BEER",
      desc: "The brew for the beer and coffee lover",
      tag:  "STOUT"
    },
    {
      i: 5,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/1WNURfsep4uvkp4DTyr7ii/f315752a012f3fa9257bcc5be6cbea9a/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItcHJkIiwia2V5IjoiRENIL2ltYWdlL2pwZWcvMTA5OTMyMTMvR3Vpbm5lc3NfQkJRXzExMTkuanBnIiwiZWRpdHMi?fm=avif&w=1920&q=60",
      head: "GUINNESS ORIGNAL",
      desc: "The precursor to every Guinness innovation you've ever enjoyed",
      tag:  "STOUT"
    },
    {
      i: 6,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/496ZhZlMdW1rs7pdMZKW7l/636363f8d7dc13c557b2aa7cb21204c6/Guinness.com_Wip?fm=avif&w=1920&q=60",
      head: "GUINNESS WEST INDIES PORTER",
      desc: "Rich and character porter creator specifically do with stand long haul to the Caribbean American Africa, Africa and south-east Asia",
      tag:  "PORTER"
    },
    {
      i: 7,
      url: "https://images.ctfassets.net/8nq3bs98o7cv/7IR06AulHgewvV7gFthwZj/2d7378d9ae4d33afbc747e7829815774/Guinness_Baltimore_Blonder_Hero.jpeg?fm=avif&w=1920&q=60",
      head: "GUINNESS BALTIMORE BLONDE",
      desc: "Irish tradition meets American spirit",
      tag:  "BLONDE"
    },
  ]);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setRealIndex(swiper.realIndex);
  };
  useEffect(() => {
    if (RealIndex === 0) {
      const activeSlide = document.querySelector(".swiper-slide-prev");
      if (activeSlide) {
        const overlay = document.createElement("div");
        overlay.className = "overlay-2";

        const carouselContent = document.createElement("div");
        carouselContent.className = "carousel-content";
        carouselContent.innerHTML = `
          <h1>${data[7].tag}</h1>
          <h2>${data[7].head}</h2>
        `;

        const blackContent = document.createElement("div");
        blackContent.className = "black-content";

        const h3 = document.createElement("h3");
        h3.textContent = data[7].desc;

        const buttons = document.createElement("div");
        buttons.className = "buttons";

        const viewBeerButton = document.createElement("button");
        viewBeerButton.textContent = "View this Beer";

        const allBeersButton = document.createElement("button");
        allBeersButton.textContent = "All Beers";

        buttons.appendChild(viewBeerButton);
        buttons.appendChild(allBeersButton);

        blackContent.appendChild(h3);
        blackContent.appendChild(buttons);

        overlay.appendChild(carouselContent);
        overlay.appendChild(blackContent);

        activeSlide.appendChild(overlay);
      }
    }
  }, [RealIndex, data]);

  return (
    <>
      <div className="p-content">&nbsp; &nbsp; &nbsp; OUR BEERS</div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {data.map((elem,index) => (
          <SwiperSlide>
            <div className="container">
              <img src={elem.url} alt="" />
            </div>
            <p>{elem.head}</p>
            <div className={(RealIndex-1 === index)  ? "overlay-2" : ""}>
              
              
             {RealIndex-1===index ?(
              <>
               <div className="caorousel-content">
                <h1>{elem.tag}</h1>
                <h2>{elem.head}</h2>
               </div>
                <div className="black-content">
                  <h3>{elem.desc}</h3>
                  <div className="buttons">
                    <button>View this Beer </button>
                    <button>All Beers</button>
                  </div>
                </div>
               </>
             ):null}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default carousel;
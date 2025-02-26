import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";

const useCountUp = (end, duration = 2200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));
      setCount(increment);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const Herosection = () => {
  const headings = [
    "Find your dream Home",
    "Don't wait to buy property.buy property and wait.",
    "Find best commersial property",
    "Let us giud you Home",
  ];

  // Slider settings
  const sliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  // Background images
  const slides = [
    "city-2.jpg",
    "city-1.webp",
    "city-3.png",
    "city-4.jpg",
  ];
  const clientCount = useCountUp(3546);
  const projectCount = useCountUp(4665);
  const reviewCount = useCountUp(214);
  const commersial = useCountUp(118);
  return (
    // main hero-section
    <div className="relative">
      {/* Slider for the background */}
      <Slider {...sliderSettings} className="h-[550px] ">
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[550px] object-cover "
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        

        {/* Typewriter */}
        <div className="h-[120px] lg:h-[150px] flex items-center justify-center lg:justify-start">
          <h1
            className={`text-3xl lg:text-3xl font-bold text-white text-center lg:text-start tracking-wide sm:leading-normal lg:tracking-wide transition-all duration-400 h-[3.75rem] lg:h-[4.5rem] `}
          >
            <Typewriter
              words={headings}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h1>
        </div>

        {/* Buildings */}
        <div className=" bg-[#096391] opacity-60 flex justify-around space-x-20 py-3 px-10">
          {[
            { img: "condo.png", text: "New Project" },
            { img: "apartment.png", text: "Apartment" },
            { img: "plot.png", text: "Plot" },
            { img: "villa.png", text: "Villa" },
            { img: "commersial.png", text: "Commercial" },
            { img: "shop.png", text: "Shop" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img src={item.img} alt={item.text} className="w-10" />
              <span className="tracking-tighter flex justify-center gap-1">
                {item.text.split(" ").map((word, i) => (
                  <span key={i}>{word} </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-transparent text-white py-8">
          <div className="flex justify-around gap-28">
            <div className="text-center">
              <p className="text-5xl font-bold">{clientCount}</p>
              <p>+ Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">{projectCount}</p>
              <p>+ Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">{reviewCount}</p>
              <p>+ Projects</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">{commersial}</p>
              <p>+ Commercial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "Gillco.jpg",
//   "sushma.jpg",
//   "ambika.jpg",
//   "suntec.jpg",
//   "ty.jpg",
//   "godreg.jpg",
//   "M3M.jpg",
//   "Mahindra.jpg",
//   "Medallion.jpg",
//   "omaxe.jpg",
// ];

// const Partner = () => {
//   const settings = {
//     dots: false, // Disable dots
//     infinite: true, // Enable looping
//     speed: 600, // Transition speed
//     slidesToShow: 5, // Number of slides to show
//     slidesToScroll: 1, // Number of slides to scroll
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Autoplay delay
//     responsive: [
//       {
//         breakpoint: 1024, // For devices with width < 1024px
//         settings: { slidesToShow: 3, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 768, // For devices with width < 768px
//         settings: { slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 480, // For devices with width < 480px
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="p-16">
//       {/* Heading */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">Our Partners</h1>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="flex items-center justify-center p-2">
//             <img
//               src={image}
//               alt={`Partner ${index + 1}`}
//               className="object-contain h-32 w-[90%]"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Partner;

import React, { useState } from "react";


const images = [
  "/Aldar.png",
  "/photo/Azizi.png",
  "/dlf.jpg",
  "/photo/Alef.png",
  "/photo/Arada-2.png",
  "/photo/Emaar-1.png",
  "/photo/p3.png",
  "/photo/p4.png",
  "/photo/p5.png",
  "/photo/p6.png",
  "/photo/p7.png",
  "/photo/p8.png",
  "/photo/p9.png",
  "/photo/p10.png",
  "/photo/p11.png",
  "/photo/p12.png",
  "/photo/p13.png",
  "/photo/p14.png",
  "/photo/p15.png",
  "/photo/p16.png",
  "/photo/p17.png",
  "/photo/p18.png",
  "/photo/p19.png",
  "/photo/p20.png",
  "/photo/p21.png",
  "/photo/p22.png",
  "/photo/p23.png",
  "/photo/p24.png",
  "/photo/p25.png",
  "/photo/p26.png",
];

const Partner = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Partners</h1>
      </div>

      {/* Scrolling Marquee */}
      <div
        className="overflow-hidden whitespace-nowrap border-t border-b py-4 cursor-pointer"
        onClick={togglePause}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex space-x-8 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-center min-w-[180px] h-24">
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;

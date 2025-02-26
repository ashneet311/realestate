import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    image: "city-3.png",
    feedback:
      "Dubai Elite Properties provided the best service. The management is professional and always prioritizes client satisfaction. Highly recommended!",
  },
  {
    name: "Fatima Khalid",
    image: "city-3.png",
    feedback:
      "Finding the perfect luxury apartment in Downtown Dubai was a challenge until I found Dubai Elite Properties. They truly offer the best properties in the UAE!",
  },
  {
    name: "Mohammed Rashid",
    image: "city-3.png",
    feedback:
      "The properties are top-notch, well-maintained, and offer excellent value for money. The team is professional and listens to every requirement carefully. Highly satisfied with my purchase in Palm Jumeirah!",
  },
  {
    name: "Aisha Noor",
    image: "city-3.png",
    feedback:
      "Dubai Elite Properties made my dream home a reality. Their expert guidance and exceptional service helped me find the perfect residence in Dubai Marina!",
  },
  {
    name: "Omar Al Suwaidi",
    image: "city-3.png",
    feedback:
      "Professional service, premium properties, and a seamless experience. I highly recommend them for anyone looking for luxury homes in Dubai!",
  },
];


const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-6 h-full">
        <div
      className="relative h-[500px] p-8 bg-cover bg-center text-white flex items-center justify-center gap-20 bg-black backdrop-brightness-50"
      style={{ backgroundImage: `url('city.jpg')` }}
    > <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      {/* Section Heading */}
      <div className="text-center mb-10 flex flex-col  gap-6 z-10">
        <h2 className="text-4xl font-bold">Hear From Our Clients</h2>
        <button className="mt-3 px-5 py-2 bg-transparent border border-white  text-white hover:bg-white hover:text-blue-400 transition-all duration-300">
          More Reviews
        </button>
       <div className="flex gap-2"> 
        <button
          onClick={handlePrev}
          className=" p-5 bg-white rounded-full text-black shadow-md hover:bg-gray-200"
        >
          <IoIosArrowRoundBack/>
        </button>
      <button
          onClick={handleNext}
          className="p-5 bg-white rounded-full text-black shadow-md hover:bg-gray-200"
        >
          <IoIosArrowRoundForward />
        </button>
        </div>
      </div>
      

      {/* Testimonial Cards */}
      <div className="flex items-center justify-center space-x-8 z-10">
        

        {/* Testimonial Card */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg max-w-sm text-center ">
          <div className="w-20 h-20 mx-auto mb-4 relative bottom-16 border-4 border-white rounded-full">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="relative bottom-10"><h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
          <p className="mt-4 text-gray-600">{testimonials[currentIndex].feedback}</p></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Client;

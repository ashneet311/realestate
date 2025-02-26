import React, { useState } from "react";
import {
  FaRupeeSign,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaArrowsAlt,
  FaBuilding,
  FaBed,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";

// Sample Data
const residential = [
  {
    image: "city-1.webp",
    heading:
      "Ultra Luxury 4.5 BHK + Utility Apartment for Sale in Downtown Dubai",
    location: "Sheikh Zayed Road, Dubai",
    price: "AED 7M",
    area: "4500 sq ft",
    flate: "4.5 BHK + Utility",
    room: "4",
    ptype: "Apartment",
  },
  {
    image: "city-2.jpg",
    heading:
      "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Dubai Marina",
    location: "Dubai Marina, Dubai",
    price: "AED 4.7M",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-3.png",
    heading:
      "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Palm Jumeirah",
    location: "Palm Jumeirah, Dubai",
    price: "AED 3M",
    area: "3000 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Apartment",
  },
  {
    image: "city-4.jpg",
    heading: "Luxury 4.5 BHK + Utility Apartment for Sale in Al Reem Island",
    location: "Al Reem Island, Abu Dhabi",
    price: "AED 4M",
    area: "5000 sq ft",
    flate: "3 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF Apartment in Saadiyat Island",
    location: "Saadiyat Island, Abu Dhabi",
    price: "AED 3M",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-6.jpg",
    heading: "2 BHK 1285 SF Luxury Apartment in Yas Island",
    location: "Yas Island, Abu Dhabi",
    price: "AED 6M",
    area: "5000 sq ft",
    flate: "4 BHK + Utility",
    room: "4",
    ptype: "Penthouse",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF Apartment in Downtown Dubai",
    location: "Downtown Dubai, Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF Apartment in Dubai Marina",
    location: "Dubai Marina, Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF Apartment in Palm Jumeirah",
    location: "Palm Jumeirah, Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-2.jpg",
    heading:
      "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Al Reem Island",
    location: "Al Reem Island, Abu Dhabi",
    price: "AED 4.7M",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-2.jpg",
    heading:
      "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Saadiyat Island",
    location: "Saadiyat Island, Abu Dhabi",
    price: "AED 4.7M",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-2.jpg",
    heading:
      "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Yas Island",
    location: "Yas Island, Abu Dhabi",
    price: "AED 4.7M",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
];

const commercial = [
  {
    image: "city-1.webp",
    heading: "Ultra Modern Office Space for Sale in Business Bay, Dubai",
    location: "Business Bay, Dubai",
    price: "AED 7M",
    area: "4500 sq ft",
    ptype: "Office",
  },
  {
    image: "city-2.jpg",
    heading: "Premium Commercial Land for Sale in Dubai Silicon Oasis",
    location: "Dubai Silicon Oasis, Dubai",
    price: "AED 4.7M",
    area: "2623 sq ft",
    ptype: "Land",
  },
  {
    image: "city-3.png",
    heading: "Exclusive Office Space for Sale in Downtown Dubai",
    location: "Downtown Dubai, Dubai",
    price: "AED 3M",
    area: "3000 sq ft",
    ptype: "Office",
  },
  {
    image: "city-4.jpg",
    heading: "Prime Commercial Land for Sale in Al Reem Island, Abu Dhabi",
    location: "Al Reem Island, Abu Dhabi",
    price: "AED 4M",
    area: "5000 sq ft",
    ptype: "Land",
  },
  {
    image: "city-5.jpeg",
    heading: "Luxury Office Space in Yas Island, Abu Dhabi",
    location: "Yas Island, Abu Dhabi",
    price: "AED 3M",
    area: "2300 sq ft",
    ptype: "Office",
  },
  {
    image: "city-6.jpg",
    heading: "Spacious Commercial Land in Saadiyat Island, Abu Dhabi",
    location: "Saadiyat Island, Abu Dhabi",
    price: "AED 6M",
    area: "5000 sq ft",
    ptype: "Land",
  },
  {
    image: "city-5.jpeg",
    heading: "Furnished Office for Sale in DIFC, Dubai",
    location: "DIFC, Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    ptype: "Office",
  },
  {
    image: "city-5.jpeg",
    heading: "Grade A Office Space in JLT, Dubai",
    location: "Jumeirah Lake Towers (JLT), Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    ptype: "Office",
  },
  {
    image: "city-5.jpeg",
    heading: "Corporate Office Space in Sheikh Zayed Road, Dubai",
    location: "Sheikh Zayed Road, Dubai",
    price: "AED 3M",
    area: "2300 sq ft",
    ptype: "Office",
  },
  {
    image: "city-2.jpg",
    heading: "Prime Commercial Land in Dubai Investment Park",
    location: "Dubai Investment Park, Dubai",
    price: "AED 4.7M",
    area: "2623 sq ft",
    ptype: "Land",
  },
  {
    image: "city-2.jpg",
    heading: "Exclusive Commercial Land for Sale in Mohammed Bin Zayed City",
    location: "Mohammed Bin Zayed City, Abu Dhabi",
    price: "AED 4.7M",
    area: "2623 sq ft",
    ptype: "Land",
  },
  {
    image: "city-2.jpg",
    heading: "Strategic Commercial Land for Sale in Dubai South",
    location: "Dubai South, Dubai",
    price: "AED 4.7M",
    area: "2623 sq ft",
    ptype: "Land",
  },
];

const Property = () => {
  const [showAllResidential, setShowAllResidential] = useState(false);
  const [showAllCommercial, setShowAllCommercial] = useState(false);
  const [currentTab, setCurrentTab] = useState("Residential");
  const [residentialFilter, setResidentialFilter] = useState("");
  const [commercialFilter, setCommercialFilter] = useState("");

  // Filtered Lists
  const filteredResidential = residentialFilter
    ? residential.filter((item) => item.ptype === residentialFilter)
    : residential;

  const filteredCommercial = commercialFilter
    ? commercial.filter((item) => item.ptype === commercialFilter)
    : commercial;

  return (
    <div className="font-roboto">
      {/* Header Section */}
      <div className="bg-[#0085c4] w-full h-full flex items-center flex-col p-4 gap-2">
        <h1 className="text-3xl tracking-wider text-white">Property List</h1>
        <p className="text-white text-xs tracking-wider">
          <NavLink to="/" className="text-white">
            HOME
          </NavLink>
          / PROPERTY LIST
        </p>
        <ul className="flex no-underline gap-3">
          <li className="bg-white p-2 rounded">
            <FaFacebook className="text-blue-900" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaWhatsapp className="text-green-500" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaLinkedin className="text-blue-600" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaPinterest className="text-red-700" />
          </li>
        </ul>
      </div>

      {/* Tabs Section */}
      <div className="px-32 py-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "Residential"
              ? "bg-[#0085c4] text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setCurrentTab("Residential")}
        >
          Residential
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "Commercial"
              ? "bg-[#0085c4] text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setCurrentTab("Commercial")}
        >
          Commercial
        </button>
      </div>

      {/* Filter Section */}
      <div className="px-32 py-4 flex justify-end">
        {currentTab === "Residential" && (
          <select
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            onChange={(e) => setResidentialFilter(e.target.value)}
            value={residentialFilter}
          >
            <option value="">All Residential</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        )}
        {currentTab === "Commercial" && (
          <select
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            onChange={(e) => setCommercialFilter(e.target.value)}
            value={commercialFilter}
          >
            <option value="">All Commercial</option>
            <option value="Land">Land</option>
            <option value="Office">Office</option>
          </select>
        )}
      </div>

      {/* Property List Section */}
      <div className="px-32 py-10 flex flex-col gap-10">
        {currentTab === "Residential" &&
          filteredResidential
            .slice(0, showAllResidential ? filteredResidential.length : 4)
            .map((item, index) => (
              <div
                key={index}
                className="flex gap-5 shadow-md hover:shadow-xl transition-all duration-700"
              >
                <div className="relative group hover:cursor-pointer overflow-hidden w-[35%]">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover hover:scale-125 transition duration-1000 shadow-inner"
                  />
                  <div className="absolute top-4 right-4 hover:cursor-pointer z-10 flex gap-2">
                    <p className="bg-[#0085c4] text-white px-[9px] py-[3px] text-sm  tracking-tight items-center rounded-[2px]">
                      {item.ptype}
                    </p>
                    <p className="bg-[#FA6742] text-white px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      Sale
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-4">
                  <h1 className="text-lg font-medium">{item.heading}</h1>
                  <p className="flex gap-1 text-sm text-gray-400">
                    <FaLocationDot className="text-[#0085c4] text-lg" />
                    {item.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="flex items-center gap-1">
                      <FaRupeeSign className="text-[#0085c4]" />
                      {item.price}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaArrowsAlt className="text-[#0085c4]" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBuilding className="text-[#0085c4]" />
                      {item.flate}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBed className="text-[#0085c4]" />
                      {item.room}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-[#0bbf41] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaWhatsapp className="text-white" />
                      Quote
                    </button>
                    <button className="bg-[#0085c4] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <IoCallSharp className="text-white" />
                      Call Us
                    </button>
                    <button className="bg-[#0085c4] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaLink className="text-white" />
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
        {currentTab === "Commercial" &&
          filteredCommercial
            .slice(0, showAllCommercial ? filteredCommercial.length : 4)
            .map((item, index) => (
              <div
                key={index}
                className="flex gap-5 shadow-md hover:shadow-xl transition-all duration-700"
              >
                <div className="relative group hover:cursor-pointer overflow-hidden w-[35%]">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover hover:scale-125 transition duration-1000 shadow-inner"
                  />
                  <div className="absolute top-4 right-4 hover:cursor-pointer z-10 flex gap-2">
                    <p className="bg-[#0085c4] text-white px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      {item.ptype}
                    </p>
                    <p className="bg-[#FA6742] text-white px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      Sale
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-4">
                  <h1 className="text-lg font-medium">{item.heading}</h1>
                  <p className="flex gap-1 text-sm text-gray-400">
                    <FaLocationDot className="text-[#0085c4] text-lg" />
                    {item.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="flex items-center gap-1">
                      <FaRupeeSign className="text-[#0085c4]" />
                      {item.price}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaArrowsAlt className="text-[#0085c4]" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBuilding className="text-[#0085c4]" />
                      {item.flate}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBed className="text-[#0085c4]" />
                      {item.room}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-[#0bbf41] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaWhatsapp className="text-white" />
                      Quote
                    </button>
                    <button className="bg-[#0085c4] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <IoCallSharp className="text-white" />
                      Call Us
                    </button>
                    <button className="bg-[#0085c4] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaLink className="text-white" />
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="px-32 py-4">
        {currentTab === "Residential" && (
          <button
            className="px-4 py-2 bg-[#0085c4] text-white rounded"
            onClick={() => setShowAllResidential(!showAllResidential)}
          >
            {showAllResidential ? "Show Less" : "Show More"}
          </button>
        )}
        {currentTab === "Commercial" && (
          <button
            className="px-4 py-2 bg-[#0085c4] text-white rounded"
            onClick={() => setShowAllCommercial(!showAllCommercial)}
          >
            {showAllCommercial ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Property;

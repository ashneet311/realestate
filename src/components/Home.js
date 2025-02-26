import React from 'react'
import Herosection from './HeroSection'
import Card from './Card'
import Project from './Project'
import Choosus from './Choosus'
import Properties from './Properties'
import Client from './Client'
import Partner from './Partener'
import Video from './Video'
import Footer from './Footer'

const card = [
    {
      image: "city-1.webp",
      heading: "3 BHK Luxury 2394 SF Apartment in Downtown Dubai",
      para: "Sheikh Zayed Road, Downtown Dubai",
      price: "AED 20,500",
    },
    {
      image: "city-2.jpg",
      heading: "2 BHK 1285 SF Luxury Apartment in Marina Dubai",
      para: "Dubai Marina, Dubai",
      price: "AED 20,500",
    },
    {
      image: "city-3.png",
      heading: "3 BHK Luxury 2394 SF Apartment in Palm Jumeirah",
      para: "Palm Jumeirah, Dubai",
      price: "AED 20,500",
    },
    {
      image: "city-4.jpg",
      heading: "2 BHK 1285 SF Luxury Apartment in Al Reem Island",
      para: "Al Reem Island, Abu Dhabi",
      price: "AED 30,500",
    },
    {
      image: "city-5.jpeg",
      heading: "3 BHK Luxury 2394 SF Apartment in Saadiyat Island",
      para: "Saadiyat Island, Abu Dhabi",
      price: "AED 40,500",
    },
    {
      image: "city-6.jpg",
      heading: "2 BHK 1285 SF Luxury Apartment in Yas Island",
      para: "Yas Island, Abu Dhabi",
      price: "AED 50,500",
    },
];


const Home = () => {
  return (
    <div>
      
      <Herosection/>
      <div className='flex flex-col items-center p-10'>
      <p className='text-[#33b8f1] font-semibold'>Find rental properties anywhere</p>
      <h1 className='text-3xl font-bold'>Discover Popular Property</h1>
        <div className="flex items-center w-full justify-center">
          <div className=" grid grid-cols-3 xsm:grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 p-24">
            {card.map((item, index) => (
              <Card
                key={index}
                heading={item.heading}
                para={item.para}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
        <Project/>
        <Choosus/>
        <Properties/>
        <Client/>
        <Partner/>
        <Video/>
        <Footer/>
    </div>
  )
}

export default Home

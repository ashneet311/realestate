// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import {FaWhatsapp} from "react-icons/fa";
// import Aboutus from './Aboutus';
// import Home from './Home';
// import Property from './Property';
// import Contact from './Contact';


// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       setIsVisible(false); // Hide navbar on scroll down
//     } else {
//       setIsVisible(true); // Show navbar on scroll up
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener on unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <BrowserRouter>
//       <div className={`font-roboto font-medium transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-50`}>
//         <div className="bg-[#0085c4] text-white py-2 px-4 flex justify-between items-center">
//           <div className="flex gap-14">
//             <p className="text-sm">1800-121-0134, +91-8558806719</p>
//             <p className="text-sm">Saeebalketbirealestate.com</p>
//           </div>
//           <div>
//             <p className="text-sm">A51800046187, HRERA-PKL-REA...</p>
//           </div>
//         </div>
//         <nav className="bg-white shadow-md px-10 gap-52 py-2 flex justify-center items-center">
//           <img src="/logo2.png" alt="Logo" className="h-10" />
//           <ul className="flex space-x-6 text-sm">
//             <li>
//               <NavLink
//                 to="/"
//                 end
//                 className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li><NavLink
//                 to="/Property"
//                 end
//                 className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
//               >
//                 Property
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Aboutus"
//                 className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
//               >
//                 About us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Contactus"
//                 className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
//               >
//                 Contact Us 
//               </NavLink>
//             </li>
           
//           </ul>
//           <button className="bg-[#0bbf41] text-white px-4 py-2 rounded-[2px] flex gap-1 items-center"><FaWhatsapp/> Get Quote</button>
//         </nav>
//       </div>
//       <div className="mt-24"> {/* Adjust padding to avoid content overlap */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Aboutus" element={<Aboutus />} />
//           <Route path='/Property' element={<Property/>}/>
//           <Route path='/Contactus' element={<Contact/>}/>
          
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Property from "./Property";
import Contact from "./Contact";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false); // New state for fixed navbar

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    // Check scroll position to fix the second navbar
    if (currentScrollY > 60) { // Adjust 60 based on your top bar height
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      {/* Top Header Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-[#0085c4] text-white py-2 px-10 flex justify-between items-center text-sm">
          <div className="flex gap-8">
            <p>1800-121-0134, +91-8558806719</p>
            <p>Saeebalketbirealestate.com</p>
          </div>
          <p>A51800046187, HRERA-PKL-REA...</p>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className={`w-full z-50 bg-white shadow-md px-10 gap-52 py-3 flex justify-center items-center ${
            isFixed ? "fixed top-[32px]" : "relative" // Adjust top-[32px] based on your top bar height
          }`}
        >
          {/* Logo */}
          <img src="/log.png" alt="Logo" className="h-10 w-22" />

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Property" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                Property
              </NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Whyus" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                Why Us ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/Insights" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                Insights
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contactus" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <button className="bg-[#0bbf41] text-white px-6 py-2 rounded-md flex gap-2 items-center hover:text-black hover:bg-[#0085c4]">
            <FaWhatsapp size={20} /> Get Quote
          </button>
        </nav>
      </div>

      {/* Content Adjustment */}
      <div className={`pt-[${isFixed ? '80px' : '20px'}]`}> {/* Adjust pt-[80px] based on your navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/Contactus" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
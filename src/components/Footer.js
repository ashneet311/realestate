// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#00354e] text-white py-10">
//       <div className="container mx-auto p-10  bg-black bg-opacity-40 " style={{backgroundImage:'url(".jpg")',
//         backgroundBlendMode: "overlay",
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//         backgroundAttachment: "fixed"
//       }}>
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ml-48">
//           {/* Logo & Description */}
//           <div>
//             <img src="logo3.png" alt="" />
//              {/* Address Section */}
//             <div>
//             <h3 className="text-lg font-semibold mb-4">Addresses</h3>
//             <ul className="space-y-2">
//               <li>Dubai</li>
              
//             </ul>
//           </div>
//           </div>

//           {/* Links Section */}
//           <div className='ml-20'>
//             <h3 className="text-lg font-semibold mb-4 ">Popular Searches</h3>
//             <ul className="space-y-2">
//               <li>Our Projects</li>
//               <li>Our Cities</li>
//               <li>Property for Sale</li>
//               <li>Photo Gallery</li>
//               <li>Videos</li>
//             </ul>
//           </div>

//           {/* Gallery Section */}
//           <div className='ml-20'>
//             <h3 className="text-lg font-semibold mb-4">Gallery</h3>
//             <div className="grid grid-cols-2 gap-2">
//               <img src="chandigarh.jpg" alt="Gallery 1" className="w-full h-20 object-cover" />
//               <img src="city-6.jpg" alt="Gallery 2" className="w-full h-20 object-cover" />
//               <img src="city-7.jpg" alt="Gallery 3" className="w-full h-20 object-cover" />
//               <img src="city-2.jpg" alt="Gallery 4" className="w-full h-20 object-cover" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
        
//       </div>
//       <div className=" p-4 flex flex-col md:flex-row justify-between items-center text-sm ml-20">
//           <p>&copy; SaeedAlKetbiandAhmadRealEstate.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-primary">Facebook</a>
//             <a href="#" className="hover:text-primary">Twitter</a>
//             <a href="#" className="hover:text-primary">Instagram</a>
//             <a href="#" className="hover:text-primary">YouTube</a>
//           </div>
//         </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00354e] text-white py-10">
      <div className="container mx-auto px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div>
            <img src="logo3.png" alt="Seven DRE Logo" className="mb-4" />
            <p className="mb-4">
              Start your real estate journey with us now and discover the perfect property that suits your lifestyle and budget.
            </p>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Office Number 538, Block A, 5th Floor, Regus, 8W Building, DAFZA, Dubai - UAE</p>
            <p className="mt-2">+971 58 591 9589</p>
            <p>+971 58 536 0774</p>
            <p className="mt-2">connect@7dre.com</p>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Why UAE?</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Why Us?</a></li>
              <li><a href="#" className="hover:underline">Insights</a></li>
              <li><a href="#" className="hover:underline">Refer & Earn</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Other Links & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
                <a href="#" className="hover:text-gray-400">YouTube</a>
                <a href="#" className="hover:text-gray-400">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-4">Stay informed about upcoming new launches!</h3>
          <p>Subscribe to our Newsletter and WhatsApp Broadcast for the latest updates.</p>
          <div className="mt-4 flex justify-center">
            <input type="text" placeholder="Your mobile number" className="px-4 py-2 rounded-l-md border border-gray-300 text-black" />
            <button className="bg-blue-600 px-6 py-2 rounded-r-md text-white">SUBSCRIBE →</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
          <p>&copy; 7DRE 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

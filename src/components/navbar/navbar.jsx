import { useState } from "react";
import { Button } from "../buttons/button";
import { HeroSection } from "../hero-section/hero-section";

export function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false); // State for dropdown
  
  return (
    <div className="shadow-md w-full fixed top-0 left-0  bg-[url('./img/bg.jpg')] h-screen bg-cover bg-center bg-no-repeat w-full">
      <div className="md:flex justify-between items-center  py-4 md:px-20 px-7">
        <div className="font-bold md:text-3xl text-2xl cursor-pointer flex items-center text-white ">
          <span className="bi bi-person text-3xl text-white mr-1 pt-2 "></span>
          <h1 className="uppercase">urmila metals</h1>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute  right-8 top-6 cursor-pointer md:hidden">
          <span className={open ? "bi bi-x-lg text-white" : "bi bi-list text-white"}></span>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute z-auto md:static bg-cyan-900 md:bg-transparent text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-[12] md:my-0 my-7 font-bold">
              <a href={link.link} className="relative text-white hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full">
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Dropdown for 'PRODUCTS' */}
          <li 
            className="md:ml-8 text-[12] md:my-0 my-7 font-bold relative"
            onMouseEnter={() => setProductDropdown(true)} // Show dropdown
            onMouseLeave={() => setProductDropdown(false)} // Hide dropdown
          >
            <a
              href="/"
              className="relative text-white hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
            >
              PRODUCTS
            </a>
            {/* Dropdown menu */}
            {productDropdown && (
              <ul className="absolute left-0  bg-black text-white w-[50] py-2 mt-1 rounded-lg shadow-lg">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-600">Windows</a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-600">Doors</a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-600">Accessories</a>
                </li>
              </ul>
            )}
          </li>

          <Button>Request a Quote</Button>
        </ul>
      </div>
      <div>
        <HeroSection/>
      </div>
    </div>
  );
}

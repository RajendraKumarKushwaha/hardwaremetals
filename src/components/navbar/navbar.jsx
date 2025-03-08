import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export function Navbar({ setIsOpen }) {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
    { name: "ABOUT US", link: "/about-us" },
    { name: "CONTACT US", link: "/contact" },
  ];


  console.log("setIsOpen:", setIsOpen);
  const [open, setOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false); // State for dropdown

  return (
    <div>

      <div className="shadow-md fixed  top-0 h-22 w-full bg-black z-50 left-0">
        <div className="md:flex justify-between items-center  py-4 md:px-20 px-7">
          <div className="font-bold md:text-3xl text-2xl cursor-pointer flex items-center text-white">
            {/* <span className="bi bi-person text-3xl text-white mr-1 pt-2"></span> */}
            {/* <h1 className="uppercase">urmila metals</h1> */}
            <img src="/img/logo-4.png" alt="" className="w-15 h-15" />
          </div>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <span className={open ? "bi bi-x-lg text-white" : "bi bi-list text-white"}></span>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute z-auto md:static bg-cyan-900 md:bg-transparent text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
              }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-[12] md:my-0 my-7 font-bold">
                <Link
                  to={link.link}
                  className="relative text-white hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Dropdown for 'PRODUCTS' */}
            <li
              className="md:ml-8 text-[12] md:my-0 my-7 font-bold relative"
              onMouseEnter={() => setProductDropdown(true)} // Show dropdown
              onMouseLeave={() => setProductDropdown(false)} // Hide dropdown
            >
              <Link
                to=""
                className="relative text-white hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
              >
                PRODUCTS
              </Link>
              {/* Dropdown menu */}
              {productDropdown && (
                <ul className="absolute left-0 bg-black text-white w-[50] py-2  rounded-lg shadow-lg">
                  <li>
                    <Link to="/windows" className="block px-4 py-2 hover:bg-gray-600">
                      Windows
                    </Link>
                  </li>
                  <li>
                    <Link to="/doors" className="block px-4 py-2 hover:bg-gray-600">
                      Doors
                    </Link>
                  </li>
                  <li>
                    <Link to="/handles" className="block px-4 py-2 hover:bg-gray-600">
                      Handles
                    </Link>
                  </li>

                </ul>
              )}
            </li>

            {/* <Button  onClick={() => setIsOpen(true)}>Request a Quote</Button> */}
            {/* <button onClick={() => setIsOpen(true)}  className="py-3 px-6 rounded md:ml-8 cursor-pointer bg-yellow-600 hover:bg-yellow-400 duration-500">Request a Quote</button> */}
            <Link to="/contact">
              <button
                type="button"
                // onClick={() => setIsOpen(true)}
                className="py-3 px-6 rounded md:ml-8 cursor-pointer bg-yellow-600 hover:bg-yellow-500 duration-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                aria-label="Request a quote"
              >
                Request a Quote
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setIsOpen: PropTypes.func.isRequired, // Ensure setIsOpen is passed correctly
};
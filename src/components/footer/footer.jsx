import { Link } from "react-router-dom";

export function Footer() {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICES", link: "/services" },
        { name: "ABOUT US", link: "/about-us" },
        { name: "CONTACT US", link: "/contact" },
    ];
    return (
        <footer className="bg-[#181818] text-[#e1e1e1] py-10 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                <div>
                    <h3 className="text-2xl  font-bold mb-4">About Us</h3>
                    <p className="text-[#b9b9b9]  text-[17px] leading-7">Providing high-quality windows and doors with expert installation.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul className="text-[#b9b9b9]  text-[17px] leading-7 space-y-2">
                        {Links.map((link) => (
                            <li key={link.name} className="text-[#b9b9b9]  text-[17px] leading-7">
                                <Link
                                    to={link.link}
                                    className=" text-[#b9b9b9] hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                    <p className="text-[#b9b9b9]  text-[17px] leading-7">Opposite Rajput Gun Service, Shivani Complex, Padmadhar Colony, Dhekha, Rewa (MP) 486001</p>
                    <p className="text-[#b9b9b9]  text-[17px] leading-7">Email: <a href="mailto:riteshchaurasiya1824@gmail.com" className="text-[#b9b9b9] hover:underline">riteshchaurasiya1824@gmail.com</a></p>
                    <p className="text-[#b9b9b9]  text-[17px] leading-7">Phone:  <a href="tel:+9109786749" className="text-[#b9b9b9] hover:underline">+91-9109786749</a></p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[#b9b9b9] text-[17px] leading-7">Facebook</a>
                        <a href="#" className="text-[#b9b9b9]  text-[17px] leading-7">Twitter</a>
                        <a href="#" className="text-[#b9b9b9]  text-[17px] leading-7">Instagram</a>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-gray-600 mt-4 "/>
            <div className="text-center mt-4 leading-7 md:px-20  px-7">
               "© 2025 "
               <span>URMILA METALS</span>
               " | All Rights Reserved. | Designed & Developed with passion by " &nbsp;
               <a href="https://www.rajendrakushwaha.com/" target="_blank" className="underline">Rajendra</a>
            </div>
           
        </footer>
    );
}

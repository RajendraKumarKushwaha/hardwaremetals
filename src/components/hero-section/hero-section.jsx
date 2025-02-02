import { Link } from "react-router-dom";

export function HeroSection() {
    return (
        <div className="relative h-screen w-full ">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* Content (Placed Above the Overlay) */}
            <div className="relative  z-10 text-white mt-20 md:flex md:justify-between md:items-center md:px-20 px-7 h-screen">
                <div className="md:text-[55px] md:leading-[54px] py-16 text-3xl font-semibold md:w-[45%]">
                    <h1>Windows & Doors Crafted for Safety and Comfort</h1>
                </div>
                <div>
                    <div className="  md:text-xl">
                        <p>
                            Our windows and doors combine durability  
                            <span className="hidden sm:inline"><br /></span>  
                            with advanced insulation to keep your  
                            <span className="hidden sm:inline"><br /></span>  
                            home secure and energy-efficient.
                        </p>
                    </div>
                    <div className="font-semibold mt-3">
                        <button className="py-3 px-6 rounded me-1 md:mb-0 mb-2 cursor-pointer duration-500 bg-cyan-900 hover:bg-white hover:text-black">
                            <Link to="/windows">View all Windows</Link>
                        </button>
                        <button className="py-3 px-6 rounded md:ml-8 cursor-pointer duration-500 bg-transparent outline-2 hover:bg-white hover:text-black">
                            <Link to="/doors">View all Doors</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export function HeroSection() {
    return (
        <div className="md:flex text-white  md:justify-between md:items-center md:px-20 px-7 h-screen">
            <div className="md:text-6xl md:py-0 py-16 text-3xl font-semibold md:w-[45%]">
                <h1>Windows & Doors Crafted for Safety and Comfort</h1>
            </div>
            <div>
                <div className="md:mt-0 -mt-12 font-semibold md:text-xl ">
                    <p>Our windows and doors combine durability  <span className="hidden sm:inline"> <br /> </span>  with advanced insulation
                        to keep your  <span className="hidden sm:inline"> <br /> </span> home secure and energy-efficient.</p>
                </div>
                <div className="mt-5 space-y-2 font-semibold">
                <button className=" py-3 px-6 rounded md:ml-8 cursor-pointer duration-500 bg-cyan-900   hover:bg-white hover:text-black">View All Windows</button>
                    <button className=" py-3 px-6 rounded md:ml-8 cursor-pointer duration-500 bg-transparent  outline-2 hover:bg-white hover:text-black">View All Doors</button>

                </div>
            </div>
        </div>
    )
}
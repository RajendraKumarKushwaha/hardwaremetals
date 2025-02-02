export function About() {
    return (
        <div className="py-13 md:px-20 px-7">
            <div className="flex flex-col text-[#181818] font-bold justify-center  ">
                <h1 className="md:text-6xl text-3xl  md:px-48  text-center">About Us</h1>
               
            </div>
            <div className="md:flex py-13 justify-between  ">
                <div className="md:w-[48%] w-full">
                    <h1 className="md:text-[50px] text-3xl pb-5  font-bold md:text-start text-center  text-[#181818]">The main values ​​of the company</h1>
                    <p className="text-[#83827f] text-[17px] pb-5 leading-7 ">As technology and innovation continue to advance, windows and  doors have evolved beyond their traditional roles.</p>
                    <p className="text-[#83827f] text-[17px] leading-7 pb-5 "> Energy-efficient designs, smart home integration, and sustainable materials have become essential considerations in
                        the selection process. Homeowners and builders alike are increasingly seeking solutions that not only enhance the visual appeal of their spaces but also contribute to energy conservation and environmental
                    </p>
                </div>
                <div className="md:w-[48%] w-full">
                    {/* <p className="text-[#83827f]   text-[17px] leading-7  mb-3">Our commitment to quality craftsmanship and customer satisfaction sets us apart in the industry.</p> */}
                    <img src="/img/windows1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
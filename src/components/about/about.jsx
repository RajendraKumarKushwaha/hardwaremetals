export function About() {
    return (
        <div className="pt-24 md:px-20 px-7">
            <div className="flex flex-col text-black font-bold justify-center items-center ">
                <h1 className="md:text-6xl text-3xl mb-4 md:px-48  text-center">About Us</h1>
                <p className="font-semibold text-black text-xl">Home / About Us</p>
            </div>
            <div className="md:flex pt-8 justify-between  space-y-6">
                <div className="md:w-[48%] w-full">
                    <h1 className="md:text-[50px] text-3xl mb-7 font-bold md:text-start text-center">The main values ​​of the company</h1>
                    <p className="text-gray-600 text-[17px] leading-7 font-semibold">As technology and innovation continue to advance, windows and  doors have evolved beyond their traditional roles.</p>
                    <p className="text-gray-600 text-[17px] leading-7  font-semibold mt-8"> Energy-efficient designs, smart home integration, and sustainable materials have become essential considerations in
                        the selection process. Homeowners and builders alike are increasingly seeking solutions that not only enhance the visual appeal of their spaces but also contribute to energy conservation and environmental
                    </p>
                </div>
                <div className="md:w-[48%] w-full">
                    <p className="text-gray-600  font-semibold text-[17px] leading-7  mb-3">Our commitment to quality craftsmanship and customer satisfaction sets us apart in the industry.</p>
                    <img src="/img/windows1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
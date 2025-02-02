export function AboutUs() {
    return (
      <div className="flex flex-col min-h-screen  py-16"> {/* Set flex and min-height to 100vh */}
        <div className="bg-[url('/img/bg-white.jpg')] h-auto md:px-20 px-7 bg-cover bg-center bg-no-repeat w-full">
          <div className="flex flex-col text-[#181818] font-bold justify-center items-center pt-15 ">
            <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">
              Get to know More About Us.
            </h1>
            <p className=" text-[#181818] text-[17px] text-center">
              Our Journey in Windows and Doors, Your Path to Perfection.
            </p>
          </div>
  
          <div className="md:mt-20 mt-10">
            <div className="md:flex pt-8 justify-between items-center space-y-6">
              <div className="md:w-[48%] w-full">
                <p className="text-[#181818]  md:text-3xl text-2xl mb-3 text-center">
                  Mr. Ramesh Chaurasiya{" "}
                  <span className="hidden sm:inline">
                    <br />
                  </span>{" "}
                  Founder & Managing Director
                </p>
                <img src="/img/Bhaiyaji-.jpeg" alt="owner" />
              </div>
              <div className="md:w-[48%] w-full">
                <p className="text-gray-600 text-[17px] leading-7  md:text-start text-center">
                  <span className="text-[#181818] text-bold">Mr. Ramesh Chaurasiya</span>, the proud owner of Urmila Metals, brings a wealth of experience and dedication to the business. Established in 2011, Mr. Chaurasiya's vision and passion for high-quality craftsmanship have made the shop a trusted provider of windows and doors for both residential and commercial spaces.
                </p>
                <p className="text-gray-600 text-[17px] leading-7  mt-8 md:text-start text-center">
                  Under his leadership, <span className="text-[#181818] text-bold">Urmila Metals</span> has earned a reputation for its commitment to excellence, offering a diverse range of products that combine style, durability, and functionality. Mr. Chaurasiya ensures that every project receives personalized attention, working closely with customers to provide the best solutions tailored to their needs. His vision continues to drive the growth and success of{" "}
                  <span className="text-[#181818] text-bold">Urmila Metals</span>.
                </p>
              </div>
            </div>
          </div>
  
          <div className="md:mt-20 mt-10 ">
            <div className="flex pt-8 justify-between items-center md:flex-row flex-col-reverse space-y-6">
              <div className="md:w-[48%] w-full">
                <p className="text-gray-600 text-[17px] leading-7  md:text-start text-center">
                  <span className="text-[#181818] text-bold">Mr. Ritesh Chaurasiya</span>, the son of{" "}
                  <span className="text-[#181818] text-bold">Mr. Ramesh Chaurasiya</span>, is now successfully running{" "}
                  <span className="text-[#181818] text-bold">Urmila Metals</span> and leading its growth into new horizons. With a solid foundation built by his father and a keen sense of innovation, Mr. Ritesh brings fresh perspectives while maintaining the commitment to quality and craftsmanship that the business is known for.
                </p>
                <p className="text-gray-600 text-[17px] leading-7  mt-8 md:text-start text-center">
                  Under his leadership, <span className="text-black text-bold">Urmila Metals</span> continues to thrive, offering top-tier window and door solutions for both residential and commercial clients. Mr. Ritesh's focus on customer satisfaction, along with his dedication to expanding the business, ensures that the shop’s legacy will endure and continue to flourish for years to come.
                </p>
              </div>
              <div className="md:w-[48%] w-full">
                <p className="text-[#181818]  md:text-3xl text-2xl mb-3 text-center">
                  Mr. Ritesh Chaurasiya- Managing Director
                </p>
                <img src="/img/ritesh-.png" alt="" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer should be at the end */}
        
      </div>
    );
  }
  
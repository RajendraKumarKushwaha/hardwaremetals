export function Contact() {
    return (
        <div className="flex flex-col min-h-screen  py-16"> {/* Add flex and min-height to keep the footer at the bottom */}
            <div className="bg-[url('/img/bg-white.jpg')] h-auto md:px-20 px-7 bg-cover bg-center bg-no-repeat w-full">
                <div className="flex flex-col text-black font-bold justify-center items-center pt-15">
                    <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">Contact Us.</h1>
                    <p className="font-semibold text-black text-[17px] text-center">
                        Our Journey in Windows and Doors, Your Path to Perfection.
                    </p>
                </div>
                <div className="md:mt-20 mt-10">
                    <div className="md:flex pt-8 justify-between space-y-6">
                        {/* Left Contact Info Section */}
                        <div className="md:w-[48%] w-full">
                            <h1 className="md:text-6xl text-3xl text-black font-bold mb-4 ">We’d Love to Hear From You</h1>
                            <p className="text-gray-600 font-semibold text-[17px] mb-8">
                                Whether you prefer a modern look or a classic style, windows and doors offer plenty of choices to match any design and need.
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <div className="flex items-center space-x-2">
                                    <i className="bi bi-envelope text-yellow-600 text-xl"></i>
                                    <span className="text-black font-medium">
                                        Email: <a href="mailto:riteshchaurasiya1824@gmail.com" className="text-yellow-600 hover:underline">
                                            riteshchaurasiya1824@gmail.com
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="bi bi-telephone text-yellow-600 text-xl"></i>
                                    <span className="text-black font-medium">
                                        Mobile: <a href="tel:+8251926703" className="text-yellow-600 hover:underline">+91-8251926703</a> &nbsp;
                                        <a href="tel:+9109786749" className="text-yellow-600 hover:underline">+91-9109786749</a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="bi bi-geo-alt text-red-500 text-xl"></i>
                                    <span className="text-black font-medium">
                                        Address: Opposite Rajput Gun Service, Shivani Complex, Padmadhar Colony, Dhekha, Rewa (MP) 486001
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Contact Form Section */}
                        <div className="md:w-[48%] w-full">
                            <form className="bg-white p-6 border-1 rounded-lg shadow-lg w-full max-w-md">
                                <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
                                <p className="mb-4 text-gray-600 font-semibold text-[17px]">
                                    Please feel free to get in touch with us using the contact form below. We’d love to hear from you.
                                </p>

                                <label className="block text-[17px] font-medium text-black mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full text-gray-600 font-semibold text-[17px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                />
                                <label className="block text-[17px] font-medium text-black mb-1">Mobile</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    required
                                    className="w-full text-gray-600 font-semibold text-[17px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                />

                                <label className="block text-[17px] font-medium text-black mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message here"
                                    required
                                    className="w-full text-gray-600 font-semibold text-[17px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 h-32 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-400 cursor-pointer focus:ring-2 focus:bg-yellow-400 transition duration-500">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="md:mt-20 mt-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.339065057123!2d81.27541747412916!3d24.542942457891805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b6b9fe035f3%3A0xe7444ffaed47c79a!2sUrmila%20Matel!5e0!3m2!1sen!2sin!4v1738075644284!5m2!1sen!2sin"
                        className="w-full md:h-150 h-80"
                       
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
           
        </div>
    );
}

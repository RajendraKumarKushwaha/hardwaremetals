export function Contact() {
    return (
        <div className="mt-5">
            <h1 className="text-white text-center text-3xl font-bold mb-8">Contact Us</h1>
            <div className="contact flex flex-col md:flex-row justify-between mx-4">
                {/* Left Section */}
                <div className="left flex justify-center items-center mb-6 md:mb-0">
                    <img src="images/contact.png" alt="Contact Illustration" className="w-full md:w-3/5 object-contain" />
                </div>

                {/* Right Section */}
                <div className="right w-full md:w-1/2">
                    <form className="bg-blue-300 border border-white rounded-lg p-6 text-white">
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2 flex items-center">
                                <i className="bi bi-person mr-2"></i> Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2 flex items-center">
                                <i className="bi bi-at mr-2"></i> Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2 flex items-center">
                                <i className="bi bi-envelope mr-2"></i> Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                rows="5"
                                placeholder="Write your message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

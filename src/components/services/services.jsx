import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './services.css';
const servicesData = [
    {
        image: "/img/doors.jpg",
        link: "/doors",
        description: "Premium Services",
        heading: "Custom Design Doors",
        details: "Experience personalized elegance with doors designed specifically for you."
    },
    {
        image: "/img/windows.jpg",
        link: "/windows",
        description: "Premium Services",
        heading: "Innovative Windows",
        details: "Transform your home with windows that lead the way in both design and functionality."
    },
    {
        image: "/img/handles.jpg",
        link: "/handles",
        description: "Premium Services",
        heading: "Parts & Accessories",
        details: "Experienced professionals for flawless window and door setup."
    }
];

export function Services() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        setIsLoading(true);
        setTimeout(() => {
            navigate(path);
            setIsLoading(false);
        }, 500); // Optional delay for smooth UI experience
    };

    return (
        <div className=" md:px-20 pb-16 px-7">
            <div className="flex flex-col text-[#181818] font-bold justify-center items-center ">
                <h1 className="md:text-6xl text-3xl  md:px-48 text-center">Product and Services</h1>
               
            </div>

            {/* Spinner Loader */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="loader"></div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-13">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl text-center shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
                    >
                        <button
                            onClick={() => handleLinkClick(service.link)}
                            className="block w-full focus:outline-none"
                        >
                            <img
                                src={service.image}
                                alt={service.heading}
                                className="w-full h-48 object-cover cursor-pointer rounded-t-2xl transform transition-transform duration-300 hover:scale-110"
                            />
                        </button>

                        <p className="text-[#83827f]  mt-4">{service.description}</p>
                        <h3 className="md:text-2xl text-xl font-bold text-[#181818] mt-4">{service.heading}</h3>
                        <p className="text-[#83827f]  text-[17px] leading-7 mt-2">{service.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

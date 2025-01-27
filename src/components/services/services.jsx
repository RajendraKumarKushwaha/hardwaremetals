const servicesData = [
    {
        image: "/img/doors.jpg",
        description: "Premium Services",
        heading: "Custom Design Doors",
        details: "Experience personalized elegance with doors designed specifically for you."
    },
    {
        image: "/img/windows.jpg",
        description: "Premium Services",
        heading: "Innovative Windows",
        details: "Transform your home with windows that lead the way in both design and functionality."
    },
    {
        image: "/img/handles.jpg",
        description: "Premium Services",
        heading: "Parts & Accessories",
        details: "Experienced professionals for flawless window and door setup."
    }
];

export function Services() {
    return (
        <div className="pt-24 md:px-20 px-7">
            <div className="flex flex-col text-black font-semibold justify-center items-center ">
                <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">Our Services Turn Visions Into Reality.</h1>
                <p className="font-semibold text-black text-xl">Home / Service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl text-center shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
                    >
                        <img
                            src={service.image}
                            alt={service.heading}
                            className="w-full h-48 object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-110"
                        />
                        <p className="text-gray-600 font-semibold mt-4">{service.description}</p>
                        <h3 className="md:text-2xl text-xl font-bold text-gray-800 mt-4">{service.heading}</h3>
                        <p className="text-gray-600 font-semibold mt-2">{service.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

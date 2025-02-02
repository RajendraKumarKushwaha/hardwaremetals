const doorsData = [
    {
        category: "Hylam Doors",
        products: [
            {
                image: "/img/hylam-door1.webp",
                description: "High Durability",
                heading: "Premium Hylam Door",
                details: "Designed to withstand wear while maintaining style."
            },
            {
                image: "/img/hylam-door2.webp",
                description: "Elegant Finish",
                heading: "Modern Hylam Door",
                details: "Sophisticated finishes to complement any space."
            },
            {
                image: "/img/hylam-door1.webp",
                description: "Weather Resistant",
                heading: "Durable Hylam Door",
                details: "Crafted for lasting performance in any condition."
            }
        ]
    },
    {
        category: "PVC Doors",
        products: [
            {
                image: "/img/pvc-door1.png",
                description: "Affordable Luxury",
                heading: "Stylish PVC Door",
                details: "Affordable yet luxurious, perfect for your home."
            },
            {
                image: "/img/pvc-door2.avif",
                description: "Waterproof Design",
                heading: "Waterproof PVC Door",
                details: "Designed to resist water and maintain durability."
            },
            {
                image: "/img/pvc-door3.jpg",
                description: "Contemporary Style",
                heading: "Modern PVC Door",
                details: "A modern touch for the stylish homeowner."
            }
        ]
    },
    {
        category: "Plywood Doors",
        products: [
            {
                image: "/img/ply-door.jpg",
                description: "Natural Elegance",
                heading: "Wooden Plywood Door",
                details: "Enhance interiors with a touch of natural elegance."
            },
            {
                image: "/img/ply-door1.avif",
                description: "Customizable",
                heading: "Custom Plywood Door",
                details: "Tailored designs that fit your style perfectly."
            },
            {
                image: "/img/ply-door2.jpg",
                description: "Versatile Design",
                heading: "Classic Plywood Door",
                details: "A versatile option to suit every taste."
            }
        ]
    }
];

export function Doors() {
    return (
        <div className="pt-24 md:px-20 px-7 pb-16">
            <div className="flex flex-col text-[#181818]  justify-center items-center">
                <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">Explore Our Premium Doors</h1>
                <p className=" text-[#181818] text-xl">Home / Doors</p>
            </div>
            {doorsData.map((category, index) => (
                <div key={index} className="pt-16">
                    <h2 className="md:text-4xl text-3xl md:text-start text-center font-bold text-black mb-8">{category.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {category.products.map((product, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl text-center shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
                            >
                                <img
                                    src={product.image}
                                    alt={product.heading}
                                    className="w-full h-48 object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-110"
                                />
                                <p className="text-[#83827f]  mt-4">{product.description}</p>
                                <h3 className="md:text-2xl text-xl font-bold text-[#181818] mt-4">
                                    {product.heading}
                                </h3>
                                <p className="text-[#83827f]  mt-2">{product.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

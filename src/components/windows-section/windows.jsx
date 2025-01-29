const windowsData = [
    {
        category: "Sliding Windows",
        products: [
            {
                image: "/img/sliding-window1.jpg",
                description: "Smooth Operation",
                heading: "Premium Sliding Window",
                details: "Effortless operation with elegant sliding designs."
            },
            {
                image: "/img/sliding-window2.jpg",
                description: "Premium Quality",
                heading: "Classic Sliding Window",
                details: "Perfect blend of style and durability for your space."
            },
            {
                image: "/img/sliding-window3.jpg",
                description: "Space Saver",
                heading: "Eco Sliding Window",
                details: "Designed to save space without compromising style."
            }
        ]
    },
    {
        category: "Casement Windows",
        products: [
            {
                image: "/img/casement-window1.jpg",
                description: "High Functionality",
                heading: "Stylish Casement Window",
                details: "Wide-opening windows for better ventilation."
            },
            {
                image: "/img/casement-window2",
                description: "Modern Design",
                heading: "Elegant Casement Window",
                details: "Contemporary look with premium quality material."
            },
            {
                image: "/img/casement-window3.avif",
                description: "Timeless Design",
                heading: "Classic Casement Window",
                details: "A timeless addition to elevate your home's beauty."
            }
        ]
    },
    {
        category: "Fixed Windows",
        products: [
            {
                image: "/img/fixed-window1.jpg",
                description: "Panoramic Views",
                heading: "Picture Fixed Window",
                details: "Large, clear panes that let natural light flood your home."
            },
            {
                image: "/img/fixed-window3.jpg",
                description: "Sophistication",
                heading: "Custom Fixed Window",
                details: "Stunning designs perfect for any interior style."
            },
            {
                image: "/img/fixed-window3.jpg",
                description: "Unmatched Clarity",
                heading: "Modern Fixed Window",
                details: "Clean lines and clear views for modern aesthetics."
            }
        ]
    }
];

export function Windows() {
    return (
        <div className="pt-24 md:px-20 pb-16 px-7">
            <div className="flex flex-col text-black font-semibold justify-center items-center ">
                <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">Explore Our Premium Windows</h1>
                <p className="font-semibold text-black text-xl">Home / Windows</p>
            </div>
            {windowsData.map((category, index) => (
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
                                <p className="text-gray-600 font-semibold mt-4">{product.description}</p>
                                <h3 className="md:text-2xl text-xl font-bold text-black mt-4">
                                    {product.heading}
                                </h3>
                                <p className="text-gray-600 font-semibold mt-2">{product.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

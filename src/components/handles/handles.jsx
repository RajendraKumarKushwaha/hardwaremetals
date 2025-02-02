const handlesData = [
    {
        category: "Brass Handles",
        products: [
            {
                image: "/img/brass1.webp",
                description: "Premium Quality",
                heading: "Elegant Brass Handle",
                details: "High-quality brass for a durable and timeless design."
            },
            {
                image: "/img/brass2.avif",
                description: "Classic Style",
                heading: "Classic Brass Door Handle",
                details: "A classic design that complements traditional and modern doors."
            },
            {
                image: "/img/brass3.jpg",
                description: "Heavy Duty",
                heading: "Heavy Duty Brass Handle",
                details: "Built to last, this handle is perfect for high-traffic doors."
            }
        ]
    },
    {
        category: "Stainless Steel Handles",
        products: [
            {
                image: "/img/stainless1.avif",
                description: "Sleek Finish",
                heading: "Modern Stainless Steel Handle",
                details: "A sleek, contemporary design perfect for any home."
            },
            {
                image: "/img/stainless2.png",
                description: "Durability",
                heading: "Durable Stainless Steel Handle",
                details: "Corrosion-resistant, designed for long-lasting use."
            },
            {
                image: "/img/stainless3.jpg",
                description: "Stylish Design",
                heading: "Stylish Steel Handle",
                details: "A stylish addition that elevates the look of your door."
            }
        ]
    },
  
   
    
];

export function Handles() {
    return (
        <div className="pt-24 md:px-20 pb-16 px-7">
            <div className="flex flex-col text-[#181818]  justify-center items-center">
                <h1 className="md:text-6xl text-3xl mb-4 md:px-48 text-center">Explore Our Premium Handles</h1>
                <p className=" text-[#181818] text-xl">Home / Handles</p>
            </div>
            {handlesData.map((category, index) => (
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



const LogoGrid = () => {
    const logos = [
        "Google", "Levi's", "Netflix",
        "Spotify", "Patagonia", "Fujitsu",
        "Adyen", "Audi", "Triumph",
        "Tesla", "ASOS", "Takeaway.com"
    ];

    return (
        <section className="w-full bg-[#121212] text-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-light mb-8">Clients</h3>
                <p className="max-w-3xl text-gray-400 text-lg mb-16 leading-relaxed">
                    We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="w-full flex items-center justify-center h-24 p-4 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
                            <span className="text-xl md:text-3xl font-bold font-serif italic tracking-tighter text-gray-500 uppercase">{logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoGrid;

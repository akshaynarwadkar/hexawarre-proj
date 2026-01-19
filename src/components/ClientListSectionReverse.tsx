import Section4Image from '../assets/desktop/section4.png';

const ClientListSectionReverse = () => {
    return (
        <section className="w-full relative flex flex-col-reverse md:flex-row h-auto md:h-[600px]">

            <div className="w-full md:w-[30%] bg-[#121212] text-white flex flex-col justify-center px-8 py-12 md:px-12">

                <div className="border-b border-gray-700 pb-8 mb-8 group cursor-pointer">
                    <div className="uppercase text-xs font-bold tracking-widest text-gray-400 mb-3">
                        AMAZON
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed mb-4">
                        Starting with delivering through drones
                    </p>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-sm">●</span>
                    </div>
                </div>

                <div className="border-b border-gray-700 pb-8 mb-8 group cursor-pointer">
                    <div className="uppercase text-xs font-bold tracking-widest text-gray-400 mb-3">
                        O'NEILL
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed mb-4">
                        Integrating existing content into O’Neills’s new e-commerce platform
                    </p>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-sm">●</span>
                    </div>
                </div>

                <div className="group cursor-pointer">
                    <div className="uppercase text-xs font-bold tracking-widest text-gray-400 mb-3">
                        MICROSOFT
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed mb-4">
                        Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels
                    </p>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-sm">●</span>
                    </div>
                </div>

            </div>

            <div className="w-full md:w-[70%] relative h-[484px] md:h-full bg-slate-300 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={Section4Image}
                        alt="Florensis - Rethinking the entire online ecosystem"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-10 text-white max-w-3xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        FLORENSIS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        Rethinking the entire online ecosystem
                    </h2>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-lg leading-none">●</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ClientListSectionReverse;

import Image15 from '../assets/desktop/image 15.png';
import Frame20 from '../assets/desktop/Frame 20.png';

const EqualSplitSectionFour = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">

            <div className="relative w-full h-[484px] md:h-full bg-slate-800 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={Image15}
                        alt="LIBERTY GLOBAL - Delivering complex commerce solutions"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        LIBERTY GLOBAL
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        Delivering complex commerce solutions
                    </h2>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-lg leading-none">●</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[484px] md:h-full bg-orange-900 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={Frame20}
                        alt="ARLA - Swipe to find your next holiday destination"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        ARLA
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        Swipe to find your next holiday destination
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

export default EqualSplitSectionFour;

import Image10 from '../assets/desktop/image 10.png';
import Image11 from '../assets/desktop/image 11.png';

const EqualSplitSectionTwo = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">

            <div className="relative w-full h-[484px] md:h-full bg-yellow-500 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={Image10}
                        alt="CHOCOMEL - A campaign for the limited edition letter packs"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        CHOCOMEL
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        A campaign for the limited edition letter packs
                    </h2>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-lg leading-none">●</span>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[484px] md:h-full bg-blue-600 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={Image11}
                        alt="JBL - Live like a champion with Jerome Boateng"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        JBL
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        Live like a champion with Jerome Boateng
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

export default EqualSplitSectionTwo;

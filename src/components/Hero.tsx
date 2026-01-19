
import HeroImage from '../assets/desktop/Hero.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[415px] md:h-screen bg-neutral-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[#e0dcd9] opacity-20">
            </div>

            <div className="absolute inset-0 z-0">
                <img
                    src={HeroImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-20 md:px-16 md:pb-32 max-w-7xl mx-auto">
                <div className="absolute bottom-20 left-8 md:left-16 max-w-4xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 text-gray-800">WORK</div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white drop-shadow-md">
                        A selection of projects that <span className="font-bold">pioneer tech</span> and <span className="font-bold">marketing</span> to help brands stay ahead.
                    </h1>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none flex justify-between px-8 md:px-16 mix-blend-overlay opacity-20">
                <div className="border-r border-gray-500 h-full"></div>
                <div className="border-r border-gray-500 h-full hidden md:block"></div>
                <div className="border-r border-gray-500 h-full hidden lg:block"></div>
                <div className="border-r border-gray-500 h-full"></div>
            </div>

        </section>
    );
};

export default Hero;

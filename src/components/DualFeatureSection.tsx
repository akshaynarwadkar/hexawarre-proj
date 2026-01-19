interface FeatureProps {
    image: string;
    client: string;
    description: string;
    backgroundColor: string;
}

interface DualFeatureSectionProps {
    left: FeatureProps;
    right: FeatureProps;
}

const DualFeatureSection = ({ left, right }: DualFeatureSectionProps) => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">

            {/* Left Column */}
            <div className={`relative w-full h-[484px] md:h-full ${left.backgroundColor} group cursor-pointer overflow-hidden`}>
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={left.image}
                        alt={`${left.client} - ${left.description}`}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        {left.client}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        {left.description}
                    </h2>
                    <div className="flex items-center text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="mr-2">Read more</span>
                        <span className="text-lg leading-none">●</span>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className={`relative w-full h-[484px] md:h-full ${right.backgroundColor} group cursor-pointer overflow-hidden`}>
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={right.image}
                        alt={`${right.client} - ${right.description}`}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white max-w-xl">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                        {right.client}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                        {right.description}
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

export default DualFeatureSection;

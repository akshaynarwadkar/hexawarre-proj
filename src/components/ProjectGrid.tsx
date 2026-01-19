
import Section21Image from '../assets/desktop/section21.png';
import Section22Image from '../assets/desktop/section22.png';
import Section31Image from '../assets/desktop/section31.png';
import Section32Image from '../assets/desktop/section32.png';

interface ProjectCardProps {
    client: string;
    title: string;
    image?: string;
    imagePlaceholderColor: string;
}

interface ProjectGridProps {
    filterIndustry: string;
}

const ProjectCard = ({ client, title, image, imagePlaceholderColor }: ProjectCardProps) => {
    return (
        <div className="group relative cursor-pointer w-full h-[484px] md:h-[600px] overflow-hidden">
            <div className={`absolute inset-0 w-full h-full ${!image ? imagePlaceholderColor : ''} transition-transform duration-700 group-hover:scale-105`}>

                {image ? (
                    <img
                        src={image}
                        alt={`${client} - ${title}`}
                        className="w-full h-full object-cover object-center"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 bg-black/10">
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-80"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end text-white">
                <div className="uppercase text-xs font-bold tracking-widest mb-4 opacity-90">
                    {client}
                </div>
                <h3 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                    {title}
                </h3>

                <div className="flex items-center text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="mr-2">Read more</span>
                    <span className="text-lg leading-none">●</span>
                </div>
            </div>
        </div>
    );
};

const ProjectGrid = ({ filterIndustry }: ProjectGridProps) => {
    const projects = [
        {
            client: 'BOL.COM',
            title: 'A Summer island in the Netherlands',
            image: Section21Image,
            imagePlaceholderColor: 'bg-indigo-400',
            industry: 'Commerce'
        },
        {
            client: 'KEMPEN',
            title: 'Not some average banking website',
            image: Section22Image,
            imagePlaceholderColor: 'bg-emerald-400',
            industry: 'Finance'
        },
        {
            client: 'PHILIPS',
            title: 'Beautiful design meets innovative technology',
            image: Section31Image,
            imagePlaceholderColor: 'bg-blue-400',
            industry: 'Industry'
        },
        {
            client: 'GEMEENTEMUSEUM',
            title: 'A 100 years of Mondriaan & De Stijl',
            image: Section32Image,
            imagePlaceholderColor: 'bg-orange-400',
            industry: 'Utilities'
        }
    ];

    const filteredProjects = filterIndustry === 'all industries'
        ? projects
        : projects.filter(p => p.industry === filterIndustry);

    return (
        <section className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            client={project.client}
                            title={project.title}
                            image={project.image}
                            imagePlaceholderColor={project.imagePlaceholderColor}
                        />
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 py-20 text-center text-gray-500 text-xl font-light">
                        No projects found in {filterIndustry}.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectGrid;

import RealStateImage from '../Component/RealState.png';
import Lauayo from '../Component/Lauayo.png';

const Portfolio = () => {
    const projects = [
        {
            title: "Real State Project",
            description: "RealState Project is made from the react javascript with tailwind css.",
            image: RealStateImage,
            link: "https://real-state-project-three.vercel.app/"
        },
        {
            title: "Lauaayo",
            description: "Lauayo is a vibrant social media app crafted with React and API integration, offering an engaging platform similar to TikTok. Seamlessly blending creativity and connectivity, users can explore an array of entertaining videos, share their own captivating content, and interact with a dynamic community. With intuitive features and a sleek interface, Lauaayo redefines digital expression, fostering a space where users can unleash their imagination and discover endless moments of entertainment.",
            image: Lauayo, 
            link: "https://lauayo.com/"
        },
    ];

    return (
        <div className="flex flex-col items-center py-28 h-full bg-black">
            <h1 className='text-5xl lg:text-7xl text-white mb-12'>Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 lg:px-32">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                        ) : (
                            <div className="h-56 w-full flex items-center justify-center bg-gray-700 text-white">
                                No Image Available
                            </div>
                        )}
                        <div className="p-6">
                            <h2 className="text-2xl text-white mb-2">{project.title}</h2>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <a href={project.link} className="text-white hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

import RealStateImage from '../Component/RealState.png';
import Lauayo from '../Component/Lauayo.png';
import PortfolioImg from '../Component/Portfolio.png';

const Portfolio = () => {
    const projects = [
        {
            title: "Real State Project",
            description: "RealState Project is a modern, responsive web application built using React JavaScript and styled with Tailwind CSS. This project showcases a clean and user-friendly interface for browsing real estate properties, complete with dynamic filtering options and interactive maps. Whether you're searching for residential, commercial, or rental properties, this platform provides an intuitive experience for users. It also incorporates best practices in web development to ensure fast loading times and seamless navigation.",
            image: RealStateImage,
            link: "https://real-state-project-three.vercel.app/"
        },
        {
            title: "Lauaayo",
            description: "Lauayo is a vibrant social media app crafted with React and API integration, offering an engaging platform similar to TikTok. Seamlessly blending creativity and connectivity, users can explore an array of entertaining videos, share their own captivating content, and interact with a dynamic community. With intuitive features and a sleek interface, Lauaayo redefines digital expression, fostering a space where users can unleash their imagination and discover endless moments of entertainment.",
            image: Lauayo, 
            link: "https://lauayo.com/"
        },
        {
            title: "Portfolio",
            description: "The Portfolio is a showcase of my work, skills, and achievements presented in a visually appealing and organized manner. This portfolio website serves as a digital resume, providing potential employers, clients, or collaborators with insight into my expertise and experiences. It features a collection of projects I've completed, along with descriptions, technologies used, and links to live demos or repositories. Additionally, it may include information about my background, education, certifications, and contact details. With a clean design and easy navigation, this portfolio effectively communicates my capabilities and demonstrates my commitment to professionalism and excellence.",
            image: PortfolioImg, 
            link: "https://roju-portfolio.vercel.app/"
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

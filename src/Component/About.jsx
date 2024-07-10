import Profile from '../Component/PP.jpg'; 

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center py-28 h-full bg-black">
            <div className="flex flex-col items-center lg:w-1/2 mb-10 lg:mb-0">
                <div className="h-96 w-80 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={Profile} alt="Profile" className='h-full w-full object-cover' />
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 px-8 lg:px-32">
                <h1 className='text-5xl lg:text-7xl text-white mb-4'>About Me</h1>
                <p className='text-base lg:text-lg text-white mb-6'>
                    Hello! I am Roju Ghimire, a passionate and dedicated web developer with a strong focus on creating beautiful and efficient websites. I have experience in both web design and development, which allows me to build sites that are not only visually appealing but also highly functional.
                </p>
                <p className='text-base lg:text-lg text-white mb-6'>
                    I specialize in frontend development, creating responsive and user-friendly interfaces. My goal is to deliver high-quality web solutions that meet and exceed client expectations.
                </p>
                <p className='text-base lg:text-lg text-white mb-6'>
                    When I am not coding, I enjoy exploring new technologies, working on personal projects, and continuously improving my skills.
                </p>
                <p className='text-base lg:text-lg text-white mb-6'>
                    Feel free to reach out if you have any questions or if you would like to collaborate on a project!
                </p>
            </div>
        </div>
    );
}

export default About;

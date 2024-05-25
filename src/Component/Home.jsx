import Profile from '../Component/PP.jpg';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-10 lg:py-36 w-full bg-black">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 px-8 lg:px-20 mb-10 lg:mb-0">
                <p className='text-3xl lg:text-4xl text-white mb-2 lg:mb-4'>I am a</p>
                <h1 className='text-4xl lg:text-6xl text-white mb-4'>
                    <Typewriter
                        onInit={(type) => {
                            type.typeString('Web Designer')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Graphics Designer')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Freelancer')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Web Developer')
                                .pauseFor(3000)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className='text-base lg:text-lg text-white mb-4 lg:mb-6'>
                    Get your creative, beautiful, and engaging website from a passionate, frontend-focused Web Developer for clean and efficient code with great user experience.
                </p>
                <a href="/CV.pdf" download className='bg-tgray border-2 border-tgray px-4 py-2 flex items-center rounded-md text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg'>
                    <span className='mr-2'>Download CV</span>
                    <ion-icon name="code-download-sharp" size='large'></ion-icon>
                </a>
            </div>
            <div className="flex flex-col items-center lg:w-1/2">
                <div className="h-64 lg:h-96 w-64 lg:w-80 rounded-full lg:rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={Profile} alt="Profile" className='h-full w-full object-cover' />
                </div>
                <span className='text-2xl lg:text-3xl text-twhite font-bold mt-3 lg:mt-5 cursor-pointer'>Roju Ghimire</span>
            </div>
        </div>
    );
}

export default Home;

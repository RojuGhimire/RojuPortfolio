import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black">
            <div className='flex justify-between items-center py-5 px-10 md:px-20 lg:px-40 text-base'>
                <div className='text-white text-3xl'>
                    <Link to='/'>Roju</Link>
                </div>
                <div className="hidden md:flex text-white space-x-8">
                    <Link to="/" className='nav-link'>HOME</Link>
                    <Link to="/about" className='nav-link'>ABOUT</Link>
                    <Link to="/portfolio" className='nav-link'>PORTFOLIO</Link>
                    <Link to="/contact" className='nav-link'>CONTACT</Link>
                </div>
                <div className="flex items-center">
                    <a href="mailto:ghimireroju@gmail.com?subject=Hire%20Me&body=Hi%20Roju,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project." className='bg-tgray border-2 border-tgray px-3 flex items-center rounded-sm text-twhite hover:bg-bblack hover:text-tgolden hidden md:flex'>
                        <ion-icon name="code-sharp"></ion-icon>
                        <span className='m-2 text-white'>HIRE ME</span>
                        <ion-icon name="code-slash-sharp"></ion-icon>
                    </a>
                    {/* Add a responsive menu button for small screens */}
                    <button className="block md:hidden text-white">
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className="md:hidden bg-black px-4 py-2 text-white space-y-2">
                <Link to="/" className='block py-1'>HOME</Link>
                <Link to="/about" className='block py-1'>ABOUT</Link>
                <Link to="/portfolio" className='block py-1'>PORTFOLIO</Link>
                <Link to="/contact" className='block py-1'>CONTACT</Link>
                <a href="mailto:ghimireroju@gmail.com?subject=Hire%20Me&body=Hi%20Roju,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project." className='block py-2 border-t border-gray-700'>
                    <ion-icon name="code-sharp"></ion-icon>
                    <button className='m-2 bg-white text-black font-bold py-2 px-3 rounded'>HIRE ME</button>
                    <ion-icon name="code-slash-sharp"></ion-icon>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

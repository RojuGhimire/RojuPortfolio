import '../App.css';

const Navbar = () => {
    return (
        <>
            <nav className="bg-black">
                <div className='flex justify-evenly items-center py-5 text-base'>
                    <div className='text-white text-3xl'>
                        <a href='/'>Roju</a>
                    </div>
                    <div className="navlist flex text-white space-x-20 text-twhite">
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>HOME</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>ABOUT</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>PORTFOLIO</a>
                        <a href="/" className='px-2 py-1 rounded-md hover:text-twhite hover:bg-tgray'>CONTACT</a>
                    </div>
                    <a href="mailto:ghimireroju@gmail.com?subject=Hire%20Me&body=Hi%20Roju,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project." className='bg-tgray border-2 border-tgray px-3 flex items-center rounded-sm text-twhite hover:bg-bblack hover:text-tgolden'>
                        <ion-icon name="code-sharp"></ion-icon>
                        <span className='m-2 text-white'>HIRE ME</span>
                        <ion-icon name="code-slash-sharp"></ion-icon>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

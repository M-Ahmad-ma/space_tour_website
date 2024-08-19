import React from 'react';
import logo from '../assets/images/shared/logo.svg';
import line from '../assets/images/shared/line.svg';
import closeIcon from '../assets/images/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';

function Navigation() {
    const [visibility, setVisibility] = React.useState(0);

    function toggle() {
        setVisibility(!visibility);
    }

    return (
        <div>
            {/* Navbar */}
            <nav className="flex items-center justify-between p-8 md:items-center md:pt-10">  
                <div>
                    <img src={logo} alt="Logo" className="h-10" />   
                </div>    
                <img src={line} alt="line" id="animated-line" className="hidden lg:flex transform transition-transform duration-300 ease-in-out" />
                <img src={closeIcon} alt="close" className='z-[999] md:hidden ' onClick={toggle} />   
                <ul className={`absolute top-0 lg:top-5 uppercase right-0 w-2/3 z-50 md:items-center ${visibility ? "flex" : "hidden"} md:flex flex-col gap-9 h-[100vh] md:w-[80%] lg:w-1/2 md:flex-row md:h-20 text-white backdrop-blur-sm bg-white/5 p-16 lg:p-12`}>  
                    <li className="relative group"> 
                        <Link to="/Home">
                            <span className="font-bold mr-2">00</span>Home
                        </Link>  
                        <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out"></div> 
                    </li>
                    <li className="relative group"> 
                        <Link to="/Destination">
                            <span className="font-bold mr-2">01</span>Destination
                        </Link>
                        <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out"></div> 
                    </li>
                    <li className="relative group">
                        <Link to="/Crew">
                            <span className="font-bold mr-2">02</span>Crew 
                        </Link>
                        <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out"></div> 
                    </li>
                    <li className="relative group">
                        <Link to="/Technology">
                            <span className="font-bold mr-2">03</span>Technology
                        </Link>
                        <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out"></div> 
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

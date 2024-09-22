import { NavLink } from "react-router-dom";
import { HeaderNavigationlinks, ImageSign } from '../contents'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center">
            <a href='/'>
                <img src={ImageSign} className="w-auto h-auto" alt="Irteza Logo"/>
            </a>
            <nav className='flex items-center'>
                {HeaderNavigationlinks.map((link, index) => (
                    <NavLink className='inline-block px-5 py-3 text-sm sm:text-base cursor-pointer text-gray-200 hover:text-white transition-color duration-300 ease-in-out'
                        key={index}
                        to={link.href}>
                        {link.text}
                    </NavLink>
                ))}
            </nav>
            <p className="text-sm text-gray-200 mt-6 mb-16">
                © {new Date().getFullYear()} - All Rights Reserved. 
            </p>
        </footer>
    )
}

export default Footer

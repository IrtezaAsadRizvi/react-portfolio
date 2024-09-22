import { HeaderNavigationlinks, ImageLogo, UrlSkype } from '../contents'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className='w-full screen-max-width flex items-center justify-between px-10 sm:px-5 py-10 sm:py-5'>
            <a href='/'>
                <img src={ImageLogo} className="w-[60px] h-[60px]" alt="Irteza Logo"/>
            </a>
            <nav className='items-center hidden sm:flex'>
                {HeaderNavigationlinks.map((link, index) => (
                    <NavLink className='inline-block px-5 py-3 cursor-pointer text-gray-200 hover:text-white transition-color duration-300 ease-in-out'
                        key={index}
                        to={link.href}>
                        {link.text}
                    </NavLink>
                ))}
            </nav>
            <a href={UrlSkype}
                className='btn-cta-secondary hidden sm:inline-block'>
                    Skype Me!
            </a>
        </header>
    )
}

export default Header

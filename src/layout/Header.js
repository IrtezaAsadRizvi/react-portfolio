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
            <a href="https://docs.google.com/document/d/e/2PACX-1vRBtAqEK5cQ_QAdegOyU2alKCgmM3Zt79emzpZ_-LqT9xHdXhKGB1B-cnP2PpPaSg/pub" target="_blank"
                className='card !px-6 py-2 rounded-3xl hidden sm:!inline-block !w-auto hover:!scale-110 transition-transform duration-300'>
                    My Resume
            </a>
        </header>
    )
}

export default Header

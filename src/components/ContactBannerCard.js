import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageCardTopArrow } from '../contents'

const ContactBannerCard = () => {
    return (
        <div className="group px-4 pb-4 pt-20">
            <NavLink className="card-link" to="/contact" />
            <p className="text-5xl text-white">Let's <br/> work <span className="text-amber-400">Together</span></p>
            <img className="absolute top-0 left-6" alt='Link'
                src={ImageCardTopArrow} />
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100"
                src={ImageCardLink}  alt='Link'/>
        </div>
    )
}

export default ContactBannerCard

import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageGithub, ImageLinkedin } from '../contents'

const ProfilesCard = () => {
    return (
        <div className="group px-4 py-4">
            <NavLink className="card-link" to="/about" />
            <div className="grid grid-cols-2 gap-3 p-3 mb-4 rounded-3xl border border-gray-400">
                <a className=" rounded-full border border-gray-400 w-20 h-20 my-4 mx-auto flex items-center justify-center" href="https://github.com/IrtezaAsadRizvi" target="_blank" rel="noreferrer">
                    <img className="w-12" src={ImageGithub}  alt='Github'/>
                </a>
                <a className=" rounded-full border border-gray-400 w-20 h-20 my-4 mx-auto flex items-center justify-center" href="https://www.linkedin.com/in/irtezaasad/" target="_blank" rel="noreferrer">
                    <img className="w-12" src={ImageLinkedin}  alt='Linkedin'/>
                </a>
            </div>
            <p className="card-sub-title">Socials</p>
            <p className="card-title">Find me everywhere</p>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100" 
                    src={ImageCardLink}  alt='Link'/>
        </div>
    )
}

export default ProfilesCard

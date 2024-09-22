import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageSign } from '../contents'

const CredentialCard = () => {
    return (
        <div className="group px-4 py-4">
            <NavLink className="card-link" to="/about" />
            <img className="mx-auto mb-3 mt-2" src={ImageSign}  alt='Sign'/>
            <p className="card-sub-title">More about me</p>
            <p className="card-title">Credentials</p>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100" 
                    src={ImageCardLink} alt='Link'/>
        </div>
    )
}

export default CredentialCard

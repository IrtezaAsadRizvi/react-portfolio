import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageSpecialization1, ImageSpecialization2, ImageSpecialization3, ImageSpecialization4 } from '../contents'

const SpecializationCard = () => {
    return (
        <div className="group px-4 py-4">
            <NavLink className="card-link" to="/work" />
            <div className="grid grid-cols-4 pt-7 pb-10 px-2">
                <img className="inline-block m-auto w-16 grayscale-0" src={ImageSpecialization1} alt='ImageSpecialization1'/>
                <img className="inline-block m-auto w-16 grayscale-0" src={ImageSpecialization2} alt='ImageSpecialization2' />
                <img className="inline-block m-auto w-16 grayscale-0" src={ImageSpecialization3} alt='ImageSpecialization3' />
                <img className="inline-block m-auto w-16 grayscale-0" src={ImageSpecialization4} alt='ImageSpecialization4' />
            </div>
            <p className="card-sub-title">Specialization</p>
            <p className="card-title">What I can do for you</p>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100"
                src={ImageCardLink} alt='Link'/>
        </div>
    )
}

export default SpecializationCard

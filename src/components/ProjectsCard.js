import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageMyWorks } from '../contents'

const ProjectsCard = () => {
    return (
        <div className="group px-4 py-4">
            <NavLink className="card-link" to="/work" />
            <img className="mx-auto mb-3 mt-2" src={ImageMyWorks}  alt='Work'/>
            <p className="card-sub-title">Showcase</p>
            <p className="card-title">Projects</p>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100"
                src={ImageCardLink}  alt='Link'/>
        </div>
    )
}

export default ProjectsCard

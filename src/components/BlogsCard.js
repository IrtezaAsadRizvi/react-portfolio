import { NavLink } from "react-router-dom";
import { ImageCardLink, ImageMediumIcon } from '../contents'

const BlogsCard = () => {
    return (
        <div className="group px-4 py-4">
            <NavLink className="card-link" to="https://irtezaasadrizvi.github.io/" target="_blank" rel="noreferrer" />
            <img className="mx-auto mb-6 mt-2 h-[120px]" src={ImageMediumIcon} alt='Medium' />
            <p className="card-sub-title">Blog</p>
            <p className="card-title">What I write</p>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100" 
                    src={ImageCardLink} alt='Link'/>
        </div>
    )
}

export default BlogsCard

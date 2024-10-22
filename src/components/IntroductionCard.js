import { NavLink } from "react-router-dom";
import {ImageSelf, ImageCardLink} from '../contents'

const IntroductionCard = () => {
    return (
        <div className="group">
            <NavLink className="card-link" to="/about" />
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 p-5">
                <div className="h-fit sm:h-auto col-span-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-[30px_0_30px_0] overflow-hidden">
                    <img src={ImageSelf}  alt='Self'/>
                </div>
                <div className="h-auto col-span-1 pl-8 pt-8">
                    <p className="card-sub-title">Your Web Guy</p>
                    <h2 className="text-3xl text-white mb-2">Irteza Asad</h2>
                    <p className="text-xs text-gray-200">JS Developer | Frontend | Backend | Little bit of CI/CD</p>
                </div>
            </div>
            <img className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100" 
                    src={ImageCardLink}  alt='Link'/>
        </div>
    )
}

export default IntroductionCard

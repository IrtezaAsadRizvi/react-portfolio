import PortraitCard from "../components/PortraitCard"
import PersonalInfoCard from "../components/PersonalInfoCard"
import ExperienceCard from "../components/ExperienceCard"
import StudyCard from "../components/StudyCard"
import SocialsCard from "../components/SocialsCard"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const About = () => {
    useGSAP(() => {
        gsap.to('.card', {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            stagger: {
                from: "random",
                amount: 0.3
            }
        })
    }, [])
    return (
        <main className="w-full screen-max-width mt-20 mb-20 p-10 text-black">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
                <div className="grid-item card col-span-1 md:col-span-1"><PortraitCard/></div>
                <div className="grid-item col-span-1 md:col-span-2">
                    <h1 className="text-white text-6xl uppercase font-bold text-center mb-6 
                        after:content-starBigIcon before:content-starBigIcon after:ml-2 before:mr-2
                        after:relative before:relative after:top-1 before:top-1">Personal Info</h1>
                    <div className="card">
                        <PersonalInfoCard/>
                    </div> 
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-flow-dense gap-4">
                <div className="grid-item card col-span-1 sm:col-span-2"><ExperienceCard/></div>
                <div className="grid-item card col-span-1 sm:col-span-2"><StudyCard/></div>
    
                {/* <div className="grid-item card col-span-1">5</div>
                <div className="grid-item card col-span-1 sm:col-span-2">6</div>
                <div className="grid-item card col-span-1">7</div> */}
    
                <div className="grid-item card col-span-1 sm:col-span-2 md:col-span-4"><SocialsCard/></div>
            </section>
        </main>
    )
}

export default About

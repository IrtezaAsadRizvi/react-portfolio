import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ImageCardTopArrow } from '../contents'


const PersonalInfoCard = () => {
    useGSAP(() => {
        gsap.to('#InfoName', {
            y: 0,
            opacity: 1,
            ease: 'back.out',
            delay: 1,
            stagger: true 
        })
    }, [])
    return (
        <div className="group px-4 pb-4 pt-20">
            <p className='text-5xl font-semibold text-white mb-4 translate-y-2 opacity-0' id="InfoName"><span>Irteza</span> <span>Asad</span></p>
            <p className='text-gray-100 text-lg mb-4'>I’m an intermediate Javascript developer. I’ve focused my work on Website based applications(Frontend), Backend and DevOps. I specialize in Website design, Complex UI, Animations, Rest APIs, Docker, K8S, CI/CD, anything related to Web.</p>
            <img className="absolute top-0 left-6"
                src={ImageCardTopArrow}  alt='Link'/>
        </div>
    )
}

export default PersonalInfoCard

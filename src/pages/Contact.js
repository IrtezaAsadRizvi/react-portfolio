import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Contact = () => {
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
        <main className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 w-full screen-max-width mt-20 mb-20">
            <div className="grid-item col-span-1 md:col-span-1"><ContactInfo/></div>
            <div className="grid-item card col-span-1 md:col-span-2"><ContactForm/></div>
        </main>
    )
}

export default Contact

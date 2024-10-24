import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Work = () => {
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
        <main className="grid grid-cols-1 gap-4 pb-4 w-full p-6 md:p-10 screen-max-width mt-20 mb-20">
            <div className="grid-item col-span-1 ">
                <div className="card text-center ">
                    <p className="text-lg py-7 px-5">
                        <span className="text-amber-400 font-semibold">Work in progress!</span> I'm crafting something awesome — please be patient. In the meantime, enjoy the waiting music in your head... or grab a coffee. Either way, it’ll be ready before you know it!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Work

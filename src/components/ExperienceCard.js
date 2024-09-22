import { Experience } from "../contents"
const ExperienceCard = () => {
    return (
        <div className="p-6">
            <h3 className="text-base uppercase text-white font-semibold mb-6">Experience</h3>
            <ul>
                {Experience.map((item, index) => (
                    <li className="relative pb-8 last:pb-0 pl-6 after:inline-block after:absolute after:top-8 
                            after:left-0 after:w-4 after:h-4 after:border-4 after:border-amber-400 after:box-border 
                            after:rounded-full before:absolute before:top-12 before:left-[0.45rem] before:h-[calc(100%-1rem)]
                            before:border-l-2 before:border-l-amber-400 last:before:hidden">
                        <p className="text-sm text-gray-200 mb-1">{item.duration}</p>
                        <p className="text-2xl text-white font-semibold mb-1">{item.title}</p>
                        <p>
                            <a className="text-amber-400 cursor-pointer" href={item.website} target="_blank" rel="noreferrer">{item.employer}</a> 
                            <span className="text-gray-200"> ({item.localtion})</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard

import { Socials } from "../contents"

const SocialsCard = () => {
    return (
        <div className="grid grid-cols-8 gap-4 px-6 py-4">
            {Socials.map((item, index) => (
                <a className="h-20 w-20 rounded-full bg-gray-200 mx-auto flex items-center justify-center bg-opacity-30"
                    href={item.url}>
                    <img className="h-12 w-12" src={item.icon}  alt={item.icon}/>
                </a>
            ))}
        </div>
    )
}

export default SocialsCard

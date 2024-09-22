import { ImageSelf } from '../contents'

const PortraitCard = () => {
    return (
        <div className="h-auto m-6 col-span-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-3xl overflow-hidden">
            <img src={ImageSelf}  alt='Self'/>
        </div>
    )
}

export default PortraitCard

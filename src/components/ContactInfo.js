import { ImageMail, ImageMap, ImagePhone, Socials } from "../contents"

const ContactInfo = () => {
    return (
        <div className="p-4">
            <h3 className="text-base uppercase text-white font-semibold mb-6">Contact info</h3>
            <div className="flex align-top gap-4 mb-10">
                <div className="w-20 h-20 relative flex justify-center items-center rounded-2xl bg-amber-400 bg-opacity-40">
                    <img className="h-12 w-12" src={ImageMail}  alt='Email'/>
                </div>
                <div>
                    <p className="card-sub-title">Mail me</p>
                    <a className="block text-lg text-amber-300" href='mailto:irtezaasad@gmail.com'>irtezaasad@gmail.com</a>
                    <a className="block text-lg text-amber-300" href='mailto:irteza@trmedia.ca'>irteza@trmedia.ca</a>
                </div>
            </div>
            <div className="flex align-top gap-4 mb-10">
                <div className="w-20 h-20 relative flex justify-center items-center rounded-2xl bg-amber-400 bg-opacity-40">
                    <img className="h-12 w-12" src={ImagePhone}  alt='Phone'/>
                </div>
                <div>
                    <p className="card-sub-title">Call me</p>
                    <a className="block text-lg text-amber-300" href='tel:+8801682495379'>+880-1682-495-379</a>
                    <a className="block text-lg" href='skype:irtezaasad?chat'><span className="text-amber-300">irtezaasad</span> on Skype</a>
                </div>
            </div>
            <div className="flex align-top gap-4">
                <div className="w-20 h-20 relative flex justify-center items-center rounded-2xl bg-amber-400 bg-opacity-40">
                    <img className="h-12 w-12" src={ImageMap}  alt='Address'/>
                </div>
                <div>
                    <p className="card-sub-title">I live in</p>
                    <p className="block text-lg text-white">Dhaka, Bangladesh<br/>Post - 1216</p>
                </div>
            </div>

            <h3 className="text-base uppercase text-white font-semibold mb-6 mt-10 ">Reach out</h3>
            <div className="flex justify-start items-center gap-2">
                {Socials.slice(0, 3).map((item, index) => (
                    <a className="h-20 w-20 rounded-full bg-gray-200 mx-1 flex items-center justify-center bg-opacity-30 group"
                        key={index}
                        href={item.url} target="_blank" rel="noreferrer">
                        <img className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" src={item.icon}  alt={item.icon}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContactInfo

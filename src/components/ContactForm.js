import { ImageCardTopArrow } from '../contents'

const ContactForm = () => {
    return (
        <form className="p-6"  noValidate="novalidate" action="https://api.web3forms.com/submit"  method="POST">
            <h2 className="text-white text-5xl font-base pt-4 pb-6">Lets work <span className="text-amber-400 font-semibold">together</span></h2>
            <input type="hidden" name="access_key" value="9a7a3209-df37-44e6-af76-988488877d24"/>
            <input type="hidden" name="apikey" value="9a7a3209-df37-44e6-af76-988488877d24"/>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
            <input className='w-full block rounded-2xl p-4 bg-transparent border text-lg text-white focus:outline-none mb-6' name='name' placeholder='Name:John Doe'/>
            <input className='w-full block rounded-2xl p-4 bg-transparent border text-lg text-white focus:outline-none mb-6' name='email' placeholder='Email:johndoe@hogwarts.com' type='email'/>
            <input className='w-full block rounded-2xl p-4 bg-transparent border text-lg text-white focus:outline-none mb-6' name='subject' placeholder='Subject:Need to build my webapp now!'/>
            <textarea className='w-full block rounded-2xl p-4 bg-transparent border text-lg text-white focus:outline-none mb-6' name='text' rows='4' placeholder="I've just had the best idea ever! now I need a website ASAP."></textarea>
            <button className='w-full block rounded-2xl p-4 bg-amber-400 hover:bg-amber-500 text-white' type='submit'>CLICK ME!</button>

            <img className="absolute top-0 right-10"
                src={ImageCardTopArrow}  alt='Link'/>
        </form>
    )
}

export default ContactForm

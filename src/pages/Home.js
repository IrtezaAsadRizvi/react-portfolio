import IntroductionCard from "../components/IntroductionCard"
import SkillsMarquee from "../components/SkillsMarquee"
import CredentialCard from "../components/CredentialCard"
import ProjectsCard from "../components/ProjectsCard"
import BlogsCard from "../components/BlogsCard"
import SpecializationCard from "../components/SpecializationCard"
import ProfilesCard from "../components/ProfilesCard"
import CountsCard from "../components/CountsCard"
import ContactBannerCard from "../components/ContactBannerCard" 

const Home = () => {
    return (
        <main className="w-full screen-max-width grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-flow-dense gap-4 mt-20 mb-20 p-10 text-black">
            <div className="grid-item card col-span-1 sm:col-span-2 row-span-1 sm:row-span-4"><IntroductionCard/></div>
            <div className="grid-item card col-span-1 sm:col-span-2 row-span-1"><SkillsMarquee/></div>
            <div className="grid-item card col-span-1 row-span-1 sm:row-span-3"><CredentialCard/></div>
            <div className="grid-item card col-span-1 row-span-1 sm:row-span-3"><ProjectsCard/></div>

            <div className="grid-item card col-span-1 md:col-span-2 lg:col-span-1"><BlogsCard/></div>
            <div className="grid-item card col-span-1 sm:col-span-2"><SpecializationCard/></div>
            <div className="grid-item card col-span-1 md:col-span-2 lg:col-span-1"><ProfilesCard/></div>

            <div className="grid-item card col-span-1 sm:col-span-2"><CountsCard/></div>
            <div className="grid-item card col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2"><ContactBannerCard/></div>
        </main>
    )
}

export default Home

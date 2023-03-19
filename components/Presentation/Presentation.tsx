import type {NextPage} from 'next'
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Presentation: NextPage = () => {
    return (
        <div className="flex flex-col gap-6 sm:gap-10 w-full presentation-mobile">
            <div className="w-fit flex flex-col gap-2 relative">
                <img src="/Logo_Portfolio_Francis_Jaune.png" alt="" className="Profile_pointBg__1Z7Zk w-20 h-20"
                     style={{opacity: "0.2"}}/>
                <p className="text-amber-200 text-2xl font-bold relative right-2 fadeup-enter fadeup-enter-done"
                   style={{transitionDelay: "300ms"}}>Bonjour à tous ! Je suis -
                </p>
                <h1 className="header-h1-fluid font-bold text-gradient-primary fadeup-enter fadeup-enter-done"
                    style={{transitionDelay: "400ms"}}>Francis KOUAHO
                </h1>
                <p className="header-h2-fluid text-textSecondary sm:mt-4 fadeup-enter fadeup-enter-done"
                   style={{transitionDelay: "500ms"}}><b className="text-textPrimary">
                    FrontEnd Software Engineer.</b> Autodidacte
                    depuis l&rsquo;âge de 13 ans, Et actuellement deuxième année master en alternance entant que
                    FrontEnd Software Engineer chez <a
                        href="https://www.welcometothejungle.com/fr/companies/mybestpro">MyBestPro</a>.
                </p>
            </div>
            <SocialNetwork/>
        </div>
    )
}

export default Presentation

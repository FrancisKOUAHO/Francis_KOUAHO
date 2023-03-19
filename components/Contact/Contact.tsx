import {NextPage} from "next";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Contact: NextPage = () => {
    return (
        <div className="w-full" id="Contact">
            <h2
                className="mb-8 sm:mb-10 text-4xl text-white text-center fadeup-enter fadeup-enter-done"
                style={{transitionDelay: "50ms"}}>Contact</h2>
            <div className="flex flex-col items-center text-white gap-4">
                <p>
                    N&apos;hésitez pas à me contacter par courriel ou via mes réseaux sociaux.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <SocialNetwork/>
                </div>
            </div>
        </div>
    )
}
export default Contact

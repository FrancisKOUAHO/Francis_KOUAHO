import {ScrollPage} from "react-scroll-motion";
import "../assets/styles/About.css";
import ScrollingTitle from "./ScrollingTitle";
import Resume from "./Resume";
import Bio from "./Bio";
import Clients from "./Clients";


const About = () => {

    return (
        <ScrollPage page={2}>
            <section className="section-about">
                {/*<div className="bg">
                    <div className="violet-degrade"></div>
                </div>*/}
                <ScrollingTitle/>
                <Bio/>
                <Clients/>
                <Resume/>
            </section>
        </ScrollPage>
    )
}

export default About

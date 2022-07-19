import {ScrollPage} from "react-scroll-motion";
import "../assets/styles/Home.css"
import Projets from "./Projets";
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const homeRef = useRef(null)
    const sectionHome = useRef(null)
    useEffect(() => {
        gsap.to(homeRef.current, {
            ScrollTrigger: {
                trigger: homeRef.current,
                pin: sectionHome.current,
                start: 'top top',
                endtrigger: '.circle-block',
                //end: 'bottom top-=' + window.innerHeight,
                end: () => 'bottom top' + window.innerHeight,
                marker: true
            },
            x: "-100px - 50%",
        })

    })

    return (
        <ScrollPage page={1}>
            <section className="section-home" ref={sectionHome}>
                <Projets/>
            </section>
        </ScrollPage>
    )
}

export default Home

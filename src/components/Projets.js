import "../assets/styles/Projets.css"
import {stockData} from "../data";
/*import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);*/

const Projets = () => {

    /*const AnimateScrollingProjet = useRef(null);

    useEffect(() => {
        gsap.to(AnimateScrollingProjet.current, {
            scrollTrigger: {
                scrub: 1,
                trigger: AnimateScrollingProjet.current,
                start: "-35% top",
                onEnter: () => console.log('Enter'),
                onLeave: () => console.log('Leave'),
                onEnterBack: () => console.log('Enter back'),
                onLeaveBack: () => console.log('All the way back'),
                //markers: "true"
            },
            bottom: 500
        })
    })

    const AnimateScrollingProjet_2 = useRef(null);

    useEffect(() => {
        gsap.to(AnimateScrollingProjet_2.current, {
            scrollTrigger: {
                scrub: 1,
                trigger: AnimateScrollingProjet_2.current,
                start: "-130% top",
                onEnter: () => console.log('Enter'),
                onLeave: () => console.log('Leave'),
                onEnterBack: () => console.log('Enter back'),
                onLeaveBack: () => console.log('All the way back'),
                markers: "true"
            },
            bottom: 1000
        })
    })*/

    return (
        <section id="cases" className="">
            {/*<div className="bggrid bg">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>*/}
            <div className="container">
                {
                    stockData.map((data, index) => {
                        return (
                            <article key={index}>
                                <a href="case/frl" title="Facebook Reality Labs" draggable="false"
                                   data-text="Facebook Reality Labs">
                        <span>
                            <span>{data.companyUn}</span>
                            <span>&#x202F;</span>
                        </span>
                                    <span>
                            <span>{data.companyTwo}</span>
                        </span>
                                </a>
                                <div className="info">
                                    <div className="separator"></div>
                                    <p>Conception d’un site pour la commecerlisation de produit Traiteur.</p></div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projets

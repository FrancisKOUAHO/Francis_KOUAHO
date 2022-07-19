import "../assets/styles/Projets.css"
import {stockData} from "../config/data";
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projets = () => {

    const revealRefs = useRef([])

    revealRefs.current = []

    const addToRefs = (item) => {
        if (item && !revealRefs.current.includes(item)) {
            revealRefs.current.push(item)
        }
        console.log(revealRefs.current)
    }

    useEffect(() => {
        revealRefs.current.forEach((item, index) => {
            gsap.to(item, {
                scrollTrigger: {
                    scrub: 1,
                    id: `${index + 1}`,
                    start: "top 100%",
                    end: "bottom 0%",
                    trigger: item,
                    toggleActions: "play none none reverse",
                    //markers: true
                },
                top: 20,
                paused: true,
                reversed: true,
                yPercent: 0
            })
        })
    }, [])


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
                    stockData.map(({index, companyUn, companyTwo}) => {
                        return (
                            <article key={index} ref={addToRefs}>
                                <a href="case/frl" title="Facebook Reality Labs" draggable="false"
                                   data-text="Facebook Reality Labs">
                        <span>
                            <span>{companyUn}</span>
                            <span>&#x202F;</span>
                        </span>
                                    <span>
                            <span>{companyTwo}</span>
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

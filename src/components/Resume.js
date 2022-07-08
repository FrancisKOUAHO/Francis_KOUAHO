import "../assets/styles/Resume.css"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {

    const AnimateScrollingResume = useRef(null);

    useEffect(()=>{
        gsap.to(AnimateScrollingResume.current, {
            scrollTrigger: {
                scrub: 1,
                trigger: AnimateScrollingResume.current,
                start: "-190% top",
                onEnter: () => console.log('Enter'),
                onLeave: () => console.log('Leave'),
                onEnterBack: () => console.log('Enter back'),
                onLeaveBack: () => console.log('All the way back'),
                //markers: "true"
            },
            bottom: 390
        })
    })

    return (
        <section className="resume-list" ref={AnimateScrollingResume}>
            <article>
                <ul>
                    <li><strong>UXMC</strong> (UX Master Certified) by the <strong>Nielsen Norman Group</strong>,
                        with
                        specialisations in Interaction and Mobile Design.
                    </li>
                    <li><strong>Led the design</strong> and <strong>teams of designers</strong> on a range of
                        products and
                        startups.
                    </li>
                </ul>
                <ul>
                    <li>Passionate about <strong>immersive design</strong> and <strong>connected
                        devices</strong> (AR /
                        VR, automotive, aviation, etc).
                    </li>
                    <li>Endorsed by TechCity UK for the <strong>Exceptional Talent Visa</strong> in 2016.</li>
                </ul>
            </article>
        </section>
    )
}

export default Resume

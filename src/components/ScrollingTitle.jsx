import "../assets/styles/ScrollingTitle.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollingTitle = () => {
  const AnimateScrollingTitle = useRef(null);

  useEffect(() => {
    gsap.to(AnimateScrollingTitle.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: AnimateScrollingTitle.current,
        start: "90% bottom"
      },
      duration: 10,
      bottom: 100
    });
  }, []);

  return (
    <h2 className="scrolling-title" ref={AnimateScrollingTitle}>
      <span className="animate scrolling">
        <span>Développeur Front end,</span>
        <span>
          JavaScript, TypeScript, ReactJS, VueJS, Nextjs, Nuxtjs, NodeJS, MongoDB, Tailwind
        </span>
      </span>
    </h2>
  );
};

export default ScrollingTitle;

import type {NextPage} from 'next'
import TheHeader from "../components/TheHeader/TheHeader";
import Presentation from "../components/Presentation/Presentation";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import {useEffect, useRef} from "react";
import gsap from 'gsap';

const Home: NextPage = () => {
    const blobRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const blob = blobRef.current;

        if (!blob) {
            return;
        }

        const blobRect = blob.getBoundingClientRect();
        const blobSizes = {
            width: blobRect.width,
            height: blobRect.height
        };

        const move = (event: MouseEvent) => {
            let mouseX = event.clientX - blobSizes.width / 2;
            let mouseY = event.clientY - blobSizes.height / 2;

            if (raf) {
                cancelAnimationFrame(raf);
            }
            raf = requestAnimationFrame(() => {
                blob.style.setProperty('--mouse-x', mouseX + 'px');
                blob.style.setProperty('--mouse-y', mouseY + 'px');
            });
        };

        const resize = () => {
            const rect = blob.getBoundingClientRect();
            blobSizes.width = rect.width;
            blobSizes.height = rect.height;
        };

        let raf: number | null = null;
        window.addEventListener("mousemove", move);
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({defaults: {duration: 1}});

        // Animation for the header
        tl.from('.fadeup-enter-header', {
            y: 20,
            stagger: 1,
            delay: 0.5,
        });

        // Animation for the profile section
        tl.from('.fadeup-enter-profile', {
            y: 20,
            stagger: 1,
            delay: 0.5,
        });

        // Animation for the skills section
        tl.from('.fadeup-enter-skills', {
            y: 20,
            stagger: 1,
            delay: 0.5,
        });

        // Animation for the projects section
        tl.from('.fadeup-enter-projects', {
            y: 20,
            stagger: 1,
            delay: 0.5,
        });

        // Animation for the contact section
        tl.from('.fadeup-enter-contact', {
            y: 20,
            stagger: 1,
            delay: 0.5,
        });
    }, []);

    return (
      <div className="min-h-full max-w-6xl mx-auto p-6 relative" ref={containerRef}>
          <div className="min-h-full relative fadeup-enter-header">
              <TheHeader/>
          </div>
          <div className="blob" ref={blobRef}></div>
          <div
            className="relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row Profile_profileHeight__1Q9Zk fadeup-enter-profile">
              <Presentation/>
              <Profile/>
          </div>
          <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center fadeup-enter-skills">
              <Skills/>
          </div>
          <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center fadeup-enter-projects">
              <Projects/>
          </div>
          <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center fadeup-enter-contact">
              <Contact/>
          </div>
          <Footer/>
      </div>
    )
}

export default Home

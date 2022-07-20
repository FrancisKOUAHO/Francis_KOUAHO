import { ScrollPage } from 'react-scroll-motion';
import '../assets/styles/Home.css';
import '../assets/styles/Projets.css';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { projects } from '../config/data';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionHome = useRef(null);
  const revealRefs = useRef([]);

  revealRefs.current = [];

  const addToRefs = (item) => {
    if (item && !revealRefs.current.includes(item)) {
      revealRefs.current.push(item);
    }
    console.log(revealRefs.current);
  };

  useEffect(() => {
    revealRefs.current.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          scrub: 1,
          id: `${index + 1}`,
          start: 'top 100%',
          end: 'bottom 0%',
          trigger: item,
          toggleActions: 'play none none reverse'
          //markers: true
        },
        top: 20,
        paused: true,
        reversed: true,
        yPercent: 0
      });
    });
  });

  return (
    <ScrollPage page={1}>
      <section className="section-home" ref={sectionHome}>
        <section id="cases">
          {/*<div className="bggrid bg">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>*/}
          <div className="container">
            {projects.map((project, index) => {
              return (
                <article key={index} ref={addToRefs}>
                  <Link
                    to={`/project/${project.company}`}
                    state={project}
                    title={project.company}
                    draggable="false"
                    data-text={project.company}>
                    <span>
                      <span>{project.companyUn}</span>
                      <span>&#x202F;</span>
                    </span>
                    <span>
                      <span>{project.companyTwo}</span>
                    </span>
                  </Link>
                  <div className="info">
                    <div className="separator"></div>
                    <p>Conception d’un site pour la commecerlisation de produit Traiteur.</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </ScrollPage>
  );
};

export default Home;

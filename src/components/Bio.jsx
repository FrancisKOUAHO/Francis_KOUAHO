import '../assets/styles/Bio.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
  const AnimateScrollingBio = useRef(null);

  useEffect(() => {
    gsap.to(AnimateScrollingBio.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: AnimateScrollingBio.current,
        start: '-200% top'
      },
      duration: 1,
      bottom: 300
    });
  });

  return (
    <section className="bio" ref={AnimateScrollingBio}>
      <p>
        Développeur Front-End basé à Paris, 4 ans d’expérience. Passionné de nouvelles technologies,
        à travers ma créativité. Avec seulement des lignes de code (et quelques compétences), on
        peut arriver à des résultats incroyables.
      </p>
      <p style={{ marginLeft: '1rem' }}>
        C'est pourquoi je développe dans différents langages: le web (HTML, CSS), JavaScript (VueJS,
        NuxtJS & NodeJS) afin de créer ce que je souhaite. Comment créer des expériences que les
        gens aiment ?
      </p>
    </section>
  );
};

export default Bio;

import '../assets/styles/Resume.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const AnimateScrollingResume = useRef(null);

  useEffect(() => {
    gsap.to(AnimateScrollingResume.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: AnimateScrollingResume.current,
        start: '-130% top'
      },
      bottom: 390
    });
  });

  return (
    <section className="resume-list" ref={AnimateScrollingResume}>
      <article>
        <ul>
          <li>
            <strong>Bac +5</strong> (Master Manager en Ingénierie Informatique (M2i) MSc Lead Dev)
            Diplôme délivré par{' '}
            <strong>CCI Paris Île-de-France/ESIEE-IT, reconnu par l’Etat</strong>,
          </li>
          <li>
            Je dirigé<strong>la conception de l’application Let’sGo.</strong> et{' '}
            <strong>l'équipes de développeur</strong> de l'application guide urbain
          </li>
        </ul>
        <ul>
          <li>
            Passionné de nouvelles technologies,{' '}
            <strong> à travers mes divers codes, j'exprime ma créativité,</strong> et{' '}
            <strong>aussi passionné par la danse.</strong> (danseur profesionnel)
          </li>
          <li>
            Danseur Professionnel, tournée américaine <strong>“Breakin’ Convention” (2017)</strong>{' '}
            qui fut l’occasion de me produire dans les plus prestigieuses scènes américaines.{' '}
            <strong>
              (Apollo theater (Harlem), Adrienne Arsht Center (Miami), Sadler wells (London), La
              Place (Paris), Palace of Fine Arts (San Francisco), Belk Theater (Charlotte), Belco
              Theater (Denver))
            </strong>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Resume;

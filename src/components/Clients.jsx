import '../assets/styles/Clients.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const AnimateScrollingClient = useRef(null);

  useEffect(() => {
    gsap.to(AnimateScrollingClient.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: AnimateScrollingClient.current,
        start: '-280% top'
      },
      bottom: 360
    });
  });

  return (
    <section className="clients" ref={AnimateScrollingClient}>
      <figure>
        <img
          src="https://auxfinsgastronomes.com/wp-content/uploads/2022/05/cropped-IMG_3636-300x300.png"
          alt="auxfinsgastronomes"
          title="auxfinsgastronomes"
        />
      </figure>
      <figure>
        <img
          src="https://www.sudrenovationpiscine.fr/wp-content/uploads/2021/08/cropped-Logo-Blanc-final-V0-150x150.png"
          alt="sudrenovationpiscine"
          title="sudrenovationpiscine"
        />
      </figure>
      <figure>
        <img
          src="https://messiantcalot.fr/wp-content/uploads/2022/05/cropped-cropped-bleu-1.png"
          alt="messiantcalot"
          title="messiantcalot"
        />
      </figure>
      <figure>
        <img
          src="https://letsg0.fr/wp-content/uploads/2022/05/cropped-Frame-6-copie.png"
          alt="letsg0"
          title="letsg0"
        />
      </figure>
    </section>
  );
};

export default Clients;

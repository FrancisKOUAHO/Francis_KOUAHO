import "../assets/styles/Bio.css"
import {Animator, batch, FadeIn, StickyIn} from "react-scroll-motion";

const Bio = () => {
    return (
        <Animator animation={batch(FadeIn(), StickyIn())}>
            <section className="bio">
                <p>
                    Developpeur Front-End basé à Paris, 4 ans d’expérience. Passionné de nouvelles technologies, à
                    travers
                    mes divers codes, j'exprime ma créativité. Développer un outil, un site web ou même un jeu à partir
                    de
                    rien me fascine. Avec seulement des lignes de code (et quelques compétences), on peut arriver à un
                    résultat incroyable.
                </p>
                <p style={{marginLeft: "1rem"}}>
                    C'est pourquoi je développe dans différents langages: le web (HTML, CSS & PHP), le
                    Python et le JavaScript (VueJS, NuxtJS & NodeJS) afin de créer ce que je souhaite.
                    Toujours à la recherche de la réponse à la question suivante, comment créer des expériences que les
                    gens aiment ?
                </p>
            </section>
        </Animator>
    )
}

export default Bio

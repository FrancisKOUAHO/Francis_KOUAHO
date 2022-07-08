import "../assets/styles/Projets.css"

const Projets = () => {
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
                <article>
                    <a href="case/frl" title="Facebook Reality Labs" draggable="false"
                       data-text="Facebook Reality Labs">
                        <span>
                            <span>Aux</span>
                            <span>&#x202F;</span>
                            <span>Fins</span>
                        </span>
                        <span>
                            <span>Gastronomes</span>
                        </span>
                    </a>
                    <div className="info">
                        <div className="separator"></div>
                        <p>Conception d’un site pour la commecerlisation de produit Traiteur.</p></div>
                </article>
                <article>
                    <a href="case/frl" title="Facebook Reality Labs" draggable="false"
                       data-text="Facebook Reality Labs">
                        <span>
                            <span>Aux</span>
                            <span>&#x202F;</span>
                            <span>Fins</span>
                        </span>
                        <span>
                            <span>Gastronomes</span>
                        </span>
                    </a>
                    <div className="info">
                        <div className="separator"></div>
                        <p>Conception d’un site pour la commecerlisation de produit Traiteur.</p></div>
                </article>
            </div>
        </section>
    )
}

export default Projets

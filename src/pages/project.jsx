import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import "../assets/styles/Project.css";
import FooterProject from "../components/FooterProject";
import ContactProject from "../components/ContactProject";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const location = useLocation();
  const data = location.state;

  const AnimateScrollinginfo = useRef(null);

  useEffect(() => {
    gsap.to(AnimateScrollinginfo.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: AnimateScrollinginfo.current,
        start: "90% bottom"
      },
      duration: 10,
      bottom: 100
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollContainer className="main">
        <ScrollPage page={1} className="case section">
          <section className="container">
            <img className="head-cover" src={data.image} alt={data.company} />
            <section className="info" ref={AnimateScrollinginfo}>
              <h1 className="data__slice--company">
                <span>
                  <span>{data.companyUn}</span>
                </span>
                <span>
                  <span>{data.companyTwo}</span>
                </span>
              </h1>
              <h2>Conception site vitrine pour un traiteur</h2>
              <ul>
                <li>
                  <h4>Client</h4>
                  <p>Aux Fins Gastronomes</p>
                </li>
                <li>
                  <h4>Livrables</h4>
                  <p>Conception de produits, conception d'interactions</p>
                </li>
                <li>
                  <h4>Role</h4>
                  <p>Développeur Full-Stack</p>
                </li>
              </ul>
            </section>
          </section>
        </ScrollPage>
        <ScrollPage page={2}>
          <section className="content-blocks">
            <article id="case-block-template" className="block-default">
              <div className="text">Horizon Workrooms Remote collaboration reimagined</div>
            </article>
            <article id="case-block-template" className="block-img-legend legend-l ">
              <figure>
                <img src={data.image} alt={data.company} title={data.company} />
                <figcaption>
                  <p>
                    At <abbr title="Facebook Reality Labs">FRL</abbr>, I initially joined as a
                    Product Designer for{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Horizon Workrooms
                    </a>
                    : FB’s flagship collaboration experience that lets people work together in the
                    same virtual room, regardless of physical distance.
                  </p>
                  <p>
                    Designers, researchers, engineers, artists and managers, all in a bold mission
                    to explore the future of work using cutting-edge tech.
                  </p>
                </figcaption>
              </figure>
            </article>
          </section>
        </ScrollPage>
        <ScrollPage page={3}>
          <section className="content-blocks">
            <article id="case-block-template" className="block-default">
              <div className="text">Horizon Workrooms Remote collaboration reimagined</div>
            </article>
            <article id="case-block-template" className="block-free no-margin-top">
              <div className="text">
                <div className="single-column">
                  <p>
                    My most recent role at the FRL was for
                    <a href="#" target="_blank" rel="noreferrer">
                      Spark AR
                    </a>
                    , Facebooks's augmented reality platform, working on several features and
                    experiments for Spark's core platforms:{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Hub
                    </a>
                    ,
                    <a href="#" target="_blank" rel="noreferrer">
                      Portfolios
                    </a>
                    and
                    <a href="#" target="_blank" rel="noreferrer">
                      Studio
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>
            <article id="case-block-template" className="block-full-img has-padding no-margin-top">
              <figure>
                <img src={data.image} alt={data.company} title={data.company} />
              </figure>
            </article>
          </section>
        </ScrollPage>
        <ScrollPage page={4}>
          <section className="content-blocks">
            <article id="case-block-template" className="block-default">
              <div className="text">Horizon Workrooms Remote collaboration reimagined</div>
            </article>
            <article id="case-block-template" className="block-free no-margin-top">
              <div className="text"></div>
            </article>
            <article id="case-block-template" className="block-full-img has-padding no-margin-top">
              <figure>
                <img src={data.image} alt={data.company} title={data.company} />
              </figure>
            </article>
          </section>
        </ScrollPage>
        <ContactProject />
      </ScrollContainer>
      <FooterProject />
    </>
  );
};

export default Project;

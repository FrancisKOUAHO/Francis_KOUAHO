import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import "../assets/styles/Project.css";
import FooterProject from "../components/FooterProject";

const Project = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  const data = location.state;
  console.log(data.image);

  return (
    <>
      <Header />
      <ScrollContainer className="main">
        <ScrollPage page={1} className="case section">
          <section className="container">
            <img className="head-cover" src={data.image} alt={data.company} />
            <section className="info">
              <h1 className="data__slice--company">
                <span>
                  <span>{data.companyUn}</span>
                </span>
                <span>
                  <span>{data.companyTwo}</span>
                </span>
              </h1>
            </section>
          </section>
        </ScrollPage>
      </ScrollContainer>
      <FooterProject />
    </>
  );
};

export default Project;

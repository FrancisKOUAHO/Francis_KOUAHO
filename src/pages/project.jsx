import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import '../assets/styles/Project.css';
import FooterProject from '../components/FooterProject';

const Project = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <>
      <Header />
      <ScrollContainer className="main">
        <ScrollPage page={1} className="case section">
          <section className="container">
            <img
              className="head-cover"
              src="https://images.unsplash.com/photo-1657664065728-4ee40c444171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="aaaa"
            />
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

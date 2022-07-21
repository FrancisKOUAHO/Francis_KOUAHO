import { ScrollPage } from "react-scroll-motion";
import "../assets/styles/ContactProject.css";
import Linkedin from "../assets/icons/linkedin-square-logo-svgrepo-com.svg";
import Email from "../assets/icons/mail-svgrepo-com.svg";
import Document from "../assets/icons/document-svgrepo-com.svg";

const ContactProject = () => {
  return (
    <ScrollPage page={6}>
      <section className="section__contact--project">
        <div className="bg-contact__contact--project">
          <div className="violet-degrade__contact--project"></div>
        </div>
        <section className="next-case">
          <a href="#" title="Automotive" className="disable">
            <p className="enable">Projet suivant</p>
            <h2 className="enable" data-text="Automotive">
              <span>
                <span>Au</span>
                <span>to</span>
                <span>mot</span>
                <span>ive</span>
              </span>
            </h2>
          </a>
        </section>
        <div className="content__contact--project">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="#" target="_blank" draggable="false" title="Resume">
                <img src={Document} alt="Resume" />
                <span>Curriculum vitae</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" draggable="false" title="Email">
                <img src={Email} alt="Email" />
                <span>Email</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" draggable="false" title="Linkedin">
                <img src={Linkedin} alt="linkedin" />
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </ScrollPage>
  );
};

export default ContactProject;

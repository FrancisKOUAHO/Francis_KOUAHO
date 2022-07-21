import { ScrollPage } from "react-scroll-motion";
import "../assets/styles/Contact.css";
import Linkedin from "../assets/icons/linkedin.svg";
import Email from "../assets/icons/mail.svg";
import Document from "../assets/icons/document.svg";

const Contact = () => {
  return (
    <ScrollPage page={3}>
      <section className="section-contact">
        <div className="bg-contact">
          <div className="violet-degrade-contact"></div>
        </div>
        <div className="content">
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

export default Contact;

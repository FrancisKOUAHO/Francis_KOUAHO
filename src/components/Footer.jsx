import '../assets/styles/Footer.css';
import Linkedin from '../assets/icons/linkedin-square-logo-svgrepo-com.svg';
import Email from '../assets/icons/mail-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="mask-hidden disable">
          <p>
            <span>Contact</span>
          </p>
          <nav className="nav-hover">
            <a href="#" target="_blank" draggable="false" title="Linkedin">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="mailto:hi@jonvieira.com" target="_blank" draggable="false" title="Email">
              <img src={Email} alt="Email" />
            </a>
          </nav>
        </div>
        <div className="mask-default" style={{ height: '100%' }}>
          <p>
            <span className="transform-footer">Contact</span>
          </p>
          <nav className="nav-hover">
            <a
              href="#"
              target="_blank"
              draggable="false"
              title="Linkedin"
              className="transform-footer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a
              href="mailto:kouahofrancis@gmail.com"
              target="_blank"
              draggable="false"
              title="Email"
              className="transform-footer"
            >
              <img src={Email} alt="Email" />
            </a>
          </nav>
        </div>
        <div className="mask-clone" style={{ height: '0%', opacity: '1' }}>
          <div className="container-mask">
            <p>
              <span>Contact</span>
            </p>
            <nav className="nav-hover">
              <a href="#" target="_blank" draggable="false" title="Linkedin">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a href="#" target="_blank" draggable="false" title="Email">
                <img src={Email} alt="Email" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

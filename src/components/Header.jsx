import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="bg" style={{ opacity: 1 }}>
        <div className="mask-hidden disable">
          <div className="degrade"></div>
        </div>
        <div className="mask-default" style={{ height: '100' }}>
          <div className="degrade"></div>
        </div>
        <div className="mask-clone" style={{ height: '0' }}>
          <div className="container-mask">
            <div className="degrade"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <a href="/" draggable="false" title="Home">
            {/*<p>IMAGE</p>*/}
            <h3>
              <span className="transform-header">Francis</span>
              &nbsp;
              <span className="transform-header">KOUAHO</span>
            </h3>
          </a>
          <p>
            <span className="transform-header">Développeur Front end</span>
          </p>
        </div>
        <nav className="nav-hover">
          <a id="about-ref" href="#" draggable="false" title="About" className="transform-header">
            A propos
          </a>
          <a
            id="contact-ref"
            href="#"
            draggable="false"
            title="Contact"
            className="transform-header"
          >
            Contact
          </a>
          <a href="#" draggable="false" title="Resume" target="_blank" className="transform-header">
            Curriculum vitae
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

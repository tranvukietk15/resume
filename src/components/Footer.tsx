import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Kiet Tran</h3>
        <div className="social-links">
          <a href={`https://www.facebook.com/tranvukietk15/`} className="facebook"><i className="bx bxl-facebook" /></a>
          <a href={`skype:tranvukietk15?chat`} className="google-plus"><i className="bx bxl-skype" /></a>
          <a href={`https://www.linkedin.com/in/kiet-tran-555845129`} className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
        <div className="copyright">
          © Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

const Section = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay={100}>
        <h1>Kiet Tran <h2>(<b>Janos</b>)</h2></h1>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Software Developer</span>
          <span className="typed-cursor" aria-hidden="true">|</span>
        </p>

        <div className="social-links">
        <a href={`https://www.facebook.com/tranvukietk15/`} className="facebook"><i className="bx bxl-facebook" /></a>
          <a href={`skype:tranvukietk15?chat`} className="google-plus"><i className="bx bxl-skype" /></a>
          <a href={`https://www.linkedin.com/in/kiet-tran-555845129`} className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
    </section>
  );
}

export default Section;
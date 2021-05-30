import React from 'react';
import About from './About';
import Profi from './Profi';
import Resume from './Resume';
import Skills from './Skills';

const Main = () => {
  return (
    <main id="main">
      <About />
      <Skills />
      <Resume />
      <Profi />

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Son Ky Ward, Tan Phu District, Ho Chi Minh City</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p><a href={`https://${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a></p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p><a href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Main;
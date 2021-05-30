import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Almost 3 years of experience in software development
            Strong knowledge with C#, .Net core, GraphQL and ReactJs.
            Good knowledge of Databases, Object Oriented Programming, MVC, MVVM, design pattern, aws, docker.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={`/Resume/assets/img/portfolio/avatar.jpeg`} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Fullstack Web Developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>12 Nov 1996</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span><a href={`https://${process.env.REACT_APP_WEBSITE}`}>{process.env.REACT_APP_WEBSITE}</a></span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span><a href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a></span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Son Ky Ward, Tan Phu District, Ho Chi Minh City</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>{new Date().getFullYear() - new Date('1996,12,11').getFullYear()}</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Junior</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span><a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a></span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              I'm friendly, honest and eager to learn. I'm very diligent and detail-oriented.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
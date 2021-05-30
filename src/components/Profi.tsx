import React from 'react';

const Profi = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              {/* <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li> */}
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-3 col-md-4 portfolio-item filter-web" style={{ position: 'absolute', left: '440px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img className='card-img img-fluid' src='https://static.wixstatic.com/media/40fa3b_ea1ceeec636e481da19358c4010fea60~mv2.png/v1/fill/w_225,h_176,al_c,q_85,usm_0.66_1.00_0.01/40fa3b_ea1ceeec636e481da19358c4010fea60~mv2.webp' alt="Rvezy" />
              <div className="portfolio-info">
                <h4>RVezy</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 portfolio-item filter-web" style={{ position: 'absolute', left: '440px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img className='card-img img-fluid' src="https://static.wixstatic.com/media/57ec07_891dadb58e184cce867c27b47175462a~mv2.png/v1/fill/w_225,h_176,al_c,lg_1,q_85/57ec07_891dadb58e184cce867c27b47175462a~mv2.webp" alt="Milano Coffee" />
              <div className="portfolio-info">
                <h4>Milano Coffee</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 portfolio-item filter-web" style={{ position: 'absolute', left: '440px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img className='card-img img-fluid' src="https://www.vietcredit.vn/images/logo_v4.png" alt="VietCredit" />
              <div className="portfolio-info">
                <h4>VietCredit</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 portfolio-item filter-web" style={{ position: 'absolute', left: '440px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img className='card-img img-fluid' src="https://beniplus.ca/wp-content/uploads/2020/05/BeniPlus_Logos_1.png" alt="Beniplus" />
              <div className="portfolio-info">
                <h4>Beniplus</h4>
                <p>Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profi;
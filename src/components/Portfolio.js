import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import { countryard, necc, sewakTravels } from "./popup/projectData";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  const [data,setData]=useState({});
  return (
    <Fragment>
      <DetailsPopup data={data} open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="project" style={{"paddingTop":"90px"}}>
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
              Explore a showcase of my exceptional works that speak volumes about my dedication to excellence. Each project is a testament to my passion for creating meaningful digital experiences.
              </p>
            </div>
            <div className="portfolio_list">
              <ul>


                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/1.webp"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://sewaktravels.com/" target="blank">Cab Booking website</a>
                        </span>
                        <h3 className="title">
                          <a href="https://sewaktravels.com/" target="blank">
                            Web Application for
                            <br /> Sewak travels
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/TechPlek-Technologies/SewakTravels">
                            View project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => {setPopup(true);setData(sewakTravels)}}
                    />
                  </div>
                </li>

                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/img/portfolio/necc/cover.JPG"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="http://ucs.fbp.mybluehostin.me/" target="blank">Logistics Website</a>
                        </span>
                        <h3 className="title">
                          <a href="http://ucs.fbp.mybluehostin.me/" target="blank">
                            Web App for
                            <br />NECC Logistics
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/TechPlek-Technologies/NECC">
                            View project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => {setPopup(true);setData(necc)}}
                    />
                  </div>
                </li>


                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/2.webp"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://countryard.com/" target="blank">Hotel Booking website</a>
                        </span>
                        <h3 className="title">
                          <a href="https://countryard.com/" target="blank">
                            Web Application for
                            <br /> Countryard
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://countryard.com/" target="blank">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => {setPopup(true);setData(countryard)}}
                    />
                  </div>
                </li>
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/3.webp"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://teracure.com/" target="blank">E-commerce</a>
                        </span>
                        <h3 className="title">
                          <a href="https://teracure.com/" target="blank">
                            Web Application for
                            <br /> Teracure
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://teracure.com/" target="blank">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/4.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://github.com/Deepaksharma-39/phpHRM">Software</a>
                        </span>
                        <h3 className="title">
                          <a href="https://github.com/Deepaksharma-39/phpHRM">
                            HRM Software
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/Deepaksharma-39/phpHRM">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => {setPopup(true);setData(sewakTravels)}}
                    />
                  </div>
                </li> */}
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;

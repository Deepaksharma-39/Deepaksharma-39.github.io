const aboutData = {
  name: "[Your Name]",
  designation: "Full Stack Developer",
  title: "Embarking on a Journey to Develop Helpful Applications",
  text: [
    "Results-driven and versatile Full Stack Developer, adept in all stages of web development, With a comprehensive understanding of user interface, testing, and debugging processes, exceling in delivering top-notch solutions.",
    "Viewing innovation as an exciting adventure, guiding to explore and build applications that seamlessly blend functionality with user experience. With an ultimate goal to turn newfound knowledge into impactful realities.",
  ],
  skillSet: [
    { name: "Java", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Database", level: "Intermediate" },
  ],
  skillIcons: [
    { name: "Java", icon: "img/svg/java.svg" },
    { name: "React", icon: "img/svg/react.svg" },
    { name: "JavaScript", icon: "img/svg/javascript.svg" },
    { name: "Database", icon: "img/svg/database.svg" },
  ],
};


const About = () => {
  return (
    <div className="devman_tm_section" id="about" style={{"padding-top":"90px"}}>
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.webp" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/2.webp"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

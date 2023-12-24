import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "Embracing minimalism and precision, I fuse creativity with thoughtful execution, transforming visions into tangible successes.",
  },
  {
    title: "The Process of My Work",
    details:
      "I navigate complexities with precision, ensuring each step brings me closer to realizing your dreams.Join me in transforming aspirations into poetic realities, where every project becomes a song of joy and achievement.",
  },
  {
    title: "Core Value of Development",
    details:
      "My development philosophy centers on meticulous craftsmanship and unwavering dedication. We believe in transcending challenges. ",
  },
  {
    title: "Desire to Work Hard",
    details:
      " My relentless pursuit of excellence is a testament to the desire to work hard. In the realm of challenges, I find inspiration to surpass expectations",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;

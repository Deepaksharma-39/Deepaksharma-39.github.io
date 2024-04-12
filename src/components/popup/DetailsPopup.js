import Popup from "./Popup";
const DetailsPopup = ({ open, close,data }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src={data.imgSrc1} alt="" />
          <div
            className="main"
            data-img-url={data.imgSrc1}
            style={{ backgroundImage: `url(${data.imgSrc1})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.title}</h3>
          <span>
            <a href={data.liveSrc} onClick={(e) => e.preventDefault()}>
              {data.subtitle}
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              {data.description1}
            </p>
          </div>
          <div className="detailbox ">
            <ul>
              <li>
                <span>
                  <a style={{ color:" var(--main-color)"}} target="blank" href={data.liveSrc}>Live</a>
                </span>
              </li>
              <li>
                <span>
                  <a style={{ color:" var(--main-color)"}} target="blank" href={data.githubSrc}>Github</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;

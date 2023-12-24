import Popup from "./Popup";

const BlogPopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.img}
            style={{ backgroundImage: `url(${data.img})` }}
          />
        </div>
        <div className="details">
          <h3>{data.title}</h3>
          <span>
            <a href="#">{data.category}</a>
          </span>
          <div />
        </div>
        <div className="text">
          {data &&
            data.description &&
            data.description.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Popup>
  );
};
export default BlogPopup;

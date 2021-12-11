import image from "../../../../assets/footer-image.webp";
import "./titleFooter.sass";
export const TitleFooter = () => {
  return (
    <div className="tfooter">
      <div className="tfooter-image">
        <img src={image} width="50%" />
      </div>
      <div className="tfooter-title">
        <h2>Achieve peace of mind with Todoist</h2>
        <button className="btn btn-danger">
          <strong>Get Started</strong>
        </button>
      </div>
    </div>
  );
};

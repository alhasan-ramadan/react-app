import profilePic from "../assets/hoodie_avatar_cut.svg";
import "../Card.css";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title">Card Title</h2>
      <p className="card-text">Card Description</p>
    </div>
  );
}
export default Card;

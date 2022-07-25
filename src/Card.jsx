import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-character-image"
        src={props.imgUrl}
        alt={props.characterName}
      />
      <p className="card-character-name">{props.characterName}</p>
    </div>
  );
};

export default Card;

import "./Score.css";

const Score = (props) => {
  return (
    <p className="score">
      {props.scoreText}: <span className="score-point">{props.scorePoint}</span>
    </p>
  );
};

export default Score;

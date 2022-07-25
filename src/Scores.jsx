import "./Scores.css";
import Score from "./Score";

const Scores = () => {
  return (
    <div className="scores">
      <Score scoreText="Score" scorePoint="0" />
      <Score scoreText="Best score" scorePoint="0" />
    </div>
  );
};

export default Scores;

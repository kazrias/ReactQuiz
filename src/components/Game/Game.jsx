import './Game.scss'
function Game({ onClickVariant, question,step, quantity }) {
  const percentage = Math.round(step/quantity*100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)}
      </ul>
    </>
  );
}
export default Game
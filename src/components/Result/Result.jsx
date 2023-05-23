import './Result.scss'
function Result({ onClickAgain,correct,quantity }) {
  let rightAns = ''
  if (correct % 10 === 1)
    rightAns = <span>ответ</span>
  else if (correct % 10 === 2 || correct % 10 === 3 || correct % 10 === 4)
    rightAns = <span>ответа</span>
  else
    rightAns = <span>ответов</span>
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} {rightAns} из {quantity}.</h2>
      <button onClick={onClickAgain}>Попробовать снова</button>
    </div>
  );
}
export default Result
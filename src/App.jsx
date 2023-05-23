import { useState } from 'react'
import Game from './components/Game/Game'
import Result from './components/Result/Result'
import './App.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  const [again,setAgain]=useState(false);
  function onClickVariant(index) {
    if (question.correct === index)
      setCorrect(correct + 1);
    setStep(step + 1);
  }
  function onClickAgain(){
    setStep(0);
    setCorrect(0);
    setAgain(true)
  }
  return (
    <div className='App'>
      {(step < questions.length || again===true) ? <Game step={step} quantity={questions.length} onClickVariant={onClickVariant} question={question} /> :
        <Result onClickAgain={onClickAgain} correct={correct} quantity={questions.length} />}
    </div>
  )
}

export default App

import { useState } from 'react'
import Game from './components/Game/Game'
import Result from './components/Result/Result'
import './App.scss'

const questions = [
  {
    title: `Имеется кортеж вида T = (4, 2, 3). Какая из операций приведёт к тому, что имя T будет ссылаться на кортеж (1, 2, 3)?`,
    variants: ['T[0] = 1', 'T = (1) + T[1:]', 'T = (1,) + T[1:]', 'T.startswith(1)'],
    correct: 2,
  },
  {
    title: 'Для чего в Python используется встроенная функция enumerate()?',
    variants: ['Для определения количества элементов последовательности.', 'Для одновременного итерирования по самим элементам и их индексам.', 'Для сортировки элементов по значениям id.'],
    correct: 1,
  },
  {
    title: `Что выведет интерпретатор для следующей программы (версия Python 3.6+)?

    def get_name_and_decades(name, age):
         print(f"My name is {name} and I'm {age / 10:.5f} decades old.")
    get_name_and_decades("Leo", 31)`,
    variants: [
      "My name is Leo and I'm 31.00000 decades old.",
      "My name is Leo and I'm 3.1 decades old.",
      "Исключение: перед строкой стоит лишняя буква f.",
      "My name is Leo and I'm 3.10000 decades old.",
      "My name is {name} and I'm {age / 10:.5f} decades old."
    ],
    correct: 3,
  },
  {
    title: `Необходимо собрать и вывести все уникальные слова из строки рекламного текста. Какой из перечисленных типов данных Python подходит лучше всего?`,
    variants: [
      "кортеж (tuple)",
      "список (list)",
      "множество (set)",
      "словарь (dict)"
    ],
    correct: 2,
  },
  {
    title: `Учёт зверей в зоопарке ведётся с помощью приведённого ниже списка словарей. Какая из строчек кода выведет структуру, отсортированную в порядке увеличения возрастов животных?`,
    variants: [
      "sorted(animals, key='age')",
      "Ни один вариант не является верным, два словаря нельзя сравнивать друг с другом.",
      "sorted(animals, key=lambda animal: animal['age'])",
      "sorted(animals)"
    ],
    correct: 2,
  },
  {
    title: `Какой результат выведет следующий код?

    def f(a, *pargs, **kargs): print(a, pargs, kargs)
    f(1, 2, 3, x=4, y=5)`,
    variants: [
      "1, 2, 3, {'x': 4, 'y': 5}",
      "1 (2, 3) {'x': 4, 'y': 5}",
      "1, 2, 3, 'x=4', 'y=5'",
      "1, 2, 3, 4, 5"
    ],
    correct: 1,
  },
  {
    title: `Как вывести список методов и атрибутов объекта x?`,
    variants: [
      "help(x)",
      "info(x)",
      "?x",
      "dir(x)"
    ],
    correct: 3,
  },
  {
    title: `Как можно более кратко представить следующую запись?

    if X:
         A = Y
    else:
         A = Z`,
    variants: [
      "A = Y if Z else Y",
      "A = Y if X else Z",
      "A = X if Z else Y",
      "A = X if Y else Z"
    ],
    correct: 1,
  },
  {
    title: `Какая из перечисленных инструкций выполнится быстрее всего, если n = 10**6?`,
    variants: [
      "a = list(i for i in range(n))",
      "a = [i for i in range(n)]",
      "a = (i for i in range(n))",
      "a = {i for i in range(n)}"
    ],
    correct: 2,
  },
  {
    title: `Что выведет на экран следующий код?
 
    a, *b, c = [1, 2]
    print(a, b, c)`,
    variants: [
      "[1] [] [2]",
      "Будет вызвано исключение: элементов в списке меньше, чем переменных.",
      "1 0 2",
      "1 [] 2"
    ],
    correct: 3,
  },
  {
    title: `С помощью Python нужно записать данные в файл, но только в том случае, если файла ещё нет. Какой режим указать в инструкции open()?`,
    variants: [
      "'x'",
      "Никакой. Нужна предварительная проверка os.path.exists()",
      "'w'",
      "'r'"
    ],
    correct: 0,
  },
  {
    title: `Для чего в пакетах модулей python в файле __init__.py служит список __all__?`,
    variants: [
      "Для конструкторов классов, как и всё, что связано с __init__",
      "Список определяет, что экспортировать, когда происходит импорт с помощью from *",
      "Для перечисления переменных, которые будут скрыты для импортирования.",
    ],
    correct: 1,
  },
  {
    title: `При объявлении класса с помощью оператора class что пишется в круглых скобках после имени класса?`,
    variants: [
      "Имена аргументов, принимаемых методом __init__.",
      "Имена принимаемых классом аргументов.",
      "Имена суперклассов, если класс наследуется от одного или нескольких классов.",
      "Имена классов, порождаемых данным классом.",
    ],
    correct: 2,
  },
  {
    title: `Какую роль в описании метода класса выполняет декоратор @property?`,
    variants: [
      "Декорированный метод становится статическим, экземпляр не передаётся.",
      "Декорированный метод становится методом класса: метод получает класс, а не экземпляр.",
      "Значение, возвращаемое декорированным методом, вычисляется при извлечении. Можно обратиться к методу экземпляра, как к атрибуту.",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  function onClickVariant(index) {
    if (question.correct === index)
      setCorrect(correct + 1);
    setStep(step + 1);
  }
  function onClickAgain() {
    setStep(0);
    setCorrect(0);
  }
  return (
    <div className='App'>
      {(step < questions.length) ? <Game step={step} quantity={questions.length} onClickVariant={onClickVariant} question={question} /> :
        <Result onClickAgain={onClickAgain} correct={correct} quantity={questions.length} />}
    </div>
  )
}

export default App

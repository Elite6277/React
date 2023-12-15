// Этот  импорт отвечает у нас за работу с react jsx со всеми внутренними возможностями которые мы с вами изучим
import React, { StrictMode } from "react"
// Эта библиотека позволяет нам работать с дом структурой на странице, она возволяет нам вставлять  библиотеку react и тот продукт который у нас получается на страницу
import ReactDOM from "react-dom/client"
// Можем не ставить в конце расширение js/jsx сборщик сам поймет какое там расширение
import App from "./App"

// const elem = <h2>Hello World!</h2>

// const elem = React.createElement("h2", { className: "greetings" }, "Hello W")

// Если елемент имеет многострочную структуру то такую структуру нужно обязательно обарачивать в круглые скобки
// Когда вы создаете многострочный элемент у него всегда должен быть один родитель например все элементы ниже должны быть обернуты в один общий div

// className и HtmlFor отличаются от обычной верстки и также все остальные атрибуты у нас пишутся в формате CamelCase

// В фигурные скобки мы можем помещать все что угодно кроме объектов связано это с тем что любое вычислительное значение будет преобразовано к строке для того чтобы у нас небыло никаких вмешательств со стороны
// Преобразование объекта к формату текста к строке у нас выдаст ошибку нсли мы туда помешаем какой то массив то он у нас будет сконкатенирован тоесть сжать в одну строку
const text = "Hello World!"

// const elem = <h2>Hello World</h2> //Вот такой участок кода называется react elementom он может быть  намного  больше как показано ниже

const elem = (
  <div>
    <h2>Текст:{text}</h2>
    <input type="text" />
    <button />
  </div>
)

// Если у нас нет контента внутри тега то парные теги можно прописать вот так <button />

// Раньше делали так / React под капотом выглядит вот так
// const elem = React.createElement("h1", { id: "green" }, "Hello wo")
// Первым аргументом задаем наззвание нашего элемента в верстке/tagname
// Вторым аргументом задаем название класса если их вдруг нет мы задаем null если есть открываем {обьект} {className:'green'} можно и id
// Третим аргументом Это содержимое нашего тега
// В таком варианте babel работать не будет он прям напрямую отправит этот код в работу Именно babel переводит нижний вариант в верхний

// const elem = React.createElement("h1", { id: "green" }, "Hello wo")
// Так как это метод  тоесть он должен запуститься с этими аргументами и что то нам выдать то мы бы хотели посмотреть на результат его работы и на самом деле нам вернется вот такой вот объект и это все происходит в virtualDOM

// const elem = {
//   type: "h1",
//   props: {
//     className: "greeting",
//     children: "Привет, мир!",
//   },
// }

// В 17+ Версиях react не нужно в каждый файл имортировать import React  from "react" теперь он должен находитя в самом главном файле

ReactDOM.createRoot(document.getElementById("root")).render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

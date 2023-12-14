import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// const elem = <h2>Hello World!</h2>

// const elem = React.createElement("h2", { className: "greetings" }, "Hello W")

// Если елемент имеет многострочную структуру то такую структуру нужно обязательно обарачивать в круглые скобки
// Когда вы создаете многострочный элемент у него всегда должен быть один родитель например все элементы ниже должны быть обернуты в один общий div

// className и HtmlFor отличаются от обычной верстки и также все остальные атрибуты у нас пишутся в формате CamelCase

// В фигурные скобки мы можем помещать все что угодно кроме объектов связано это с тем что любое вычислительное значение будет преобразовано к строке для того чтобы у нас небыло никаких вмешательств со стороны
// Преобразование объекта к формату текста к строке у нас выдаст ошибку нсли мы туда помешаем какой то массив то он у нас будет сконкатенирован тоесть сжать в одну строку
const text = "Hello World"

const elem = (
  <div>
    <h2>Текст:{text}</h2>
    <input type="text" />
    <button />
  </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

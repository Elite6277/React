import { Component } from "react"

const Header = () => {
  return <h2>Hello Worldddd!</h2>
}

// const Field = () => {
//   const holder = "Enter here"
//   const styledField = {
//     width: "300px",
//   }
//   return <input type="text" placeholder={holder} style={styledField} />
// }

// Создаем компонент с синтаксисом классов
class Field extends Component {
  render() {
    const holder = "Enter here"
    const styledField = {
      width: "300px",
    }

    return <input type="text" placeholder={holder} style={styledField} />
  }
}

function Btn() {
  const text = "Log in"
  const logged = false
  // const res = () => {
  //   return "Log in"
  // }
  // const p = <p>Log in</p>
  return (
    <button type="submit" class="button">
      {logged ? "Enter" : text}
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  )
}

export default App

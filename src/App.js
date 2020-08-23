import React from 'react';
import Apunte from "./Components/Apunte"
import "./Color.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apuntes: [{
        id: 1,
        nota: "React es una biblioteca de javascript para construir interfaces de usuario.",
        tags: "react, javascript, front-end",
        fecha: "21/8/2020",
      },],
    }
  }

  addApunte() {
    let { apuntes } = this.state;
    let index = 1;
    let nota = "";
    const date = new Date()
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
    let fecha =  `${day}/${month}/${year}`
    let nuevoApuntes = []
    if (apuntes.length !== 0) {
      index = apuntes.length + 1
      nuevoApuntes = [
        ...apuntes
      ]
    }

    nuevoApuntes.push({ id: index, nota: nota, fecha:fecha})

    this.setState({
      apuntes: nuevoApuntes,
    })
    console.log(this.state.apuntes)
  }

  render() {
    let apuntesCards = this.state.apuntes.map(note => {
      return (
        <div className="col s4">
          <Apunte apunte={note} />
        </div>
      )
    })
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper fondoVerde1">
            <div className="container">
              <div className="row">
                <div className="col s8">
                  <h5>Thoughts</h5>
                </div>
                <div className="col s4">
                  <ul>
                    <a href="#" className="btn waves-effect waves-light teal darken-3" onClick={() => this.addApunte()}>Agregar <i className="material-icons right">add</i></a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="container">
          <div className="row">
            {apuntesCards}
          </div>
        </div>

      </div>
    );
  }
}

export default App;

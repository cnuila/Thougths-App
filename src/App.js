import React from 'react';
import Apunte from "./Components/Apunte"
import "./Color.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apuntes: JSON.parse(localStorage.getItem("thoughts")),
    }
    this.modificarApunte = this.modificarApunte.bind(this)
  }

  addApunte() {
    let { apuntes } = this.state;
    let index = 1;
    let nota = "";
    let tag = "";
    let listo = false;
    const date = new Date()
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
    let fecha = `${day}/${month}/${year}`
    let nuevoApuntes = []
    if (apuntes.length !== 0) {
      index = apuntes.length + 1
      nuevoApuntes = [
        ...apuntes
      ]
    }

    nuevoApuntes.push({ id: index, nota: nota, tags: tag, fecha: fecha, listo:listo })
    this.setState({
      apuntes: nuevoApuntes,
    })
  }

  modificarApunte = (apunteMod) => {
    let { apuntes } = this.state
    let { nota, tags, id } = apunteMod
    apuntes[id - 1].nota = nota
    apuntes[id - 1].tags = tags
    apuntes[id - 1].listo = true
    this.setState({
      apuntes: apuntes,
    })
    localStorage.setItem("thoughts",JSON.stringify(apuntes))
  }

  render() {
    let apuntesCards = this.state.apuntes.map(note => {
      console.log(localStorage.getItem("thoughts"))
      return (
        <div className="col s4">
          <Apunte identi={note.id} modificarApunte={this.modificarApunte} apunte={note} />
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

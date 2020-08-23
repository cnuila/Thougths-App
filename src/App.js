import React from 'react';
import Apunte from "./Components/Apunte"
import "./Color.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apuntes: [],

    }
  }

  addApunte() {
    let { apuntes } = this.state;
    let index = 1;
    let nuevoApuntes = []
    if (apuntes.length !== 0) {
      index = apuntes.length + 1
      nuevoApuntes = [
        ...apuntes
      ]
    }

    nuevoApuntes.push({ id: index })

    this.setState({
      apuntes: nuevoApuntes,
    })
  }

  render() {
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

        <div className="container">
          <div className="row">
            <Apunte/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

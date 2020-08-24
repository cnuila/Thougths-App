import React from 'react';
import Apunte from "./Components/Apunte"
import "./Color.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apuntes: JSON.parse(localStorage.getItem("thoughts")),
      etiquetas: JSON.parse(localStorage.getItem("etiquetas")),
      sort: [],
      flagArray: true,
    }
    this.guardarApunte = this.guardarApunte.bind(this)
    this.eliminarApunte = this.eliminarApunte.bind(this)
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
    if (apuntes !== null) {
      if (apuntes.length !== 0) {
        index = apuntes.length + 1
        nuevoApuntes = [
          ...apuntes
        ]
      }
    }

    nuevoApuntes.push({ id: index, nota: nota, tags: tag, fecha: fecha, listo: listo })
    this.setState({
      apuntes: nuevoApuntes,
    })
  }

  guardarApunte = (apunteMod) => {
    let { apuntes, etiquetas } = this.state
    let { nota, tags, id } = apunteMod
    apuntes[id - 1].nota = nota
    apuntes[id - 1].tags = tags
    apuntes[id - 1].listo = true
    let nuevasEti = []
    if (etiquetas !== null) {
      nuevasEti = etiquetas.concat(tags.split(","))
    } else {
      nuevasEti = tags.split(",")
    }
    for (var i = nuevasEti.length - 1; i >= 0; i--) {
      if (nuevasEti.indexOf(nuevasEti[i]) !== i) nuevasEti.splice(i, 1);
    }
    this.setState({
      apuntes: apuntes,
      etiquetas: nuevasEti,
    })
    localStorage.setItem("thoughts", JSON.stringify(apuntes))
    localStorage.setItem("etiquetas", JSON.stringify(nuevasEti))
  }

  eliminarApunte(id) {
    let { apuntes } = this.state

    /*let etiquetaTemp = etiquetas

    for (let i = 0; i < etiquetaTemp.length; i++) {
      let arrayTag = apuntes[id - 1].tags.split(",")
      for (let j = 0; j < arrayTag.length; j++) {
        if (arrayTag[j] === etiquetaTemp[i]) {
          let index = etiquetaTemp.indexOf(etiquetaTemp[i]);
          if (index !== -1) {
            etiquetaTemp.splice(index, 1);
          }
          j = arrayTag.length
        }
      }
    }*/

    let apuntesTemp = apuntes.filter(note => note.id !== id)
    for (let i = 0; i < apuntesTemp.length; i++) {
      if (apuntesTemp[i].id !== id) {
        apuntesTemp[i].id = i + 1
      }
    }
    this.setState({ apuntes: apuntesTemp })
    localStorage.setItem("thoughts", JSON.stringify(apuntesTemp))
  }

  todos = () => {
    this.setState({ flagArray: true });
  }

  filtrar(etiqueta) {
    let { apuntes } = this.state
    if (apuntes !== null) {
      let filtrados = []
      for (let i = 0; i < apuntes.length; i++) {
        let { tags } = apuntes[i]
        let tagsArray = tags.split(",")
        for (let j = 0; j < tagsArray.length; j++) {
          if (tagsArray[j] === etiqueta) {
            filtrados.push(apuntes[i])
            j = tagsArray
          }
        }
      }
      if (filtrados.length !== 0) {
        this.setState({
          sort: filtrados,
          flagArray: false,
        })
      }
    }
  }



  render() {
    let apuntesCards
    let dropEtiquetas
    let { flagArray } = this.state
    if (this.state.apuntes !== null) {
      if (this.state.apuntes.length === 0) {
        apuntesCards = (
          <div>
            <div className="col s2 m3"></div>
            <div className="col s8 m6">
              <h1 className="green-text text-light-green text-lighten-1">:(</h1>
              <h2 className="green-text text-light-green text-lighten-1">No tienes apuntes</h2>
            </div>
            <div className="col s2 m3"></div>
          </div>
        )
      } else {
        let apuntesArray = []
        if (flagArray) {
          apuntesArray = this.state.apuntes
        } else {
          apuntesArray = this.state.sort
        }
        apuntesCards = apuntesArray.map(note => {
          return (
            <div key={note.id} className="col s12 m4">
              <Apunte identi={note.id} guardarApunte={this.guardarApunte} eliminarApunte={this.eliminarApunte} apunte={note} />
            </div>
          )
        });
      }
    }
    if (this.state.apuntes === null) {
      apuntesCards = (
        <div>
          <div className="col s2 m3"></div>
          <div className="col s8 m6">
            <h1 className="green-text text-light-green text-lighten-1">:(</h1>
            <h2 className="green-text text-light-green text-lighten-1">No tienes apuntes</h2>
          </div>
          <div className="col s2 m3"></div>
        </div>
      )
    }
    if (this.state.etiquetas !== null) {
      dropEtiquetas = this.state.etiquetas.map(etiqueta => {
        return (<li><a href="#!" onClick={() => this.filtrar(etiqueta)}>{etiqueta}</a></li>)
      });
    }
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper fondoVerde1">
            <div className="container">
              <div className="row">
                <div className="col s6 m8">
                  <h5>Thoughts</h5>
                </div>
                <div className="col s6 m4">
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
        <div className="row">
          <div className="col s6 m8"></div>
          <div className="col s6 m4">
            <a className='waves-effect waves-light btn-small dropdown-trigger btn teal darken-3' href='#' data-target='dropdown1'>
              <i className="material-icons left">view_module</i>
              Filtrar
            </a>
            <ul id='dropdown1' className='dropdown-content'>
              <li><a href="#!" onClick={this.todos}>Todos</a></li>
              {dropEtiquetas}
            </ul>
          </div>
        </div>
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

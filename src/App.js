import React from 'react';
import "./Color.css"

function App() {
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
                                <a className="btn waves-effect waves-light teal darken-3" >Agregar <i className="material-icons right">add</i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;

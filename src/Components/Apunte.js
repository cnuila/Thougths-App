import React from 'react'

class Apunte extends React.Component {

    render() {
        let { apunte } = this.props;
        if (apunte.nota === "") {
            return (
                <div className="card">
                    <div className="card-content">
                        <div className="input-field">
                            <textarea id="textarea1" placeholder="Apunte" className="materialize-textarea"></textarea>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">bookmark</i>
                            <input id="icon_prefix" placeholder="Tags" type="text"></input>
                        </div>
                        <div className="row">
                            <div className="col s4">{apunte.fecha}</div>
                            <div className="col s2" />
                            <div className="col s6">
                                <a className="waves-effect waves-light btn green lighten-1"><i className="material-icons">save</i></a>
                                <a className="waves-effect waves-light btn green lighten-1"><i className="material-icons">delete</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-content">
                        <div className="col s12">
                            <p>{apunte.nota}</p>
                        </div>
                        <div className="row"></div>
                        <div className="col s2"><i className="material-icons">bookmark</i></div>
                        <div className="col s10"><p>{apunte.tags}</p></div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="col s4">{apunte.fecha}</div>
                            <div className="col s2" />
                            <div className="col s6">
                                <a className="waves-effect waves-light btn green lighten-1"><i className="material-icons">save</i></a>
                                <a className="waves-effect waves-light btn green lighten-1"><i className="material-icons">delete</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default Apunte;
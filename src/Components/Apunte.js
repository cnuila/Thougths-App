import React from 'react'

class Apunte extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nota:"",
            tags:""
        }
    }

    handleChange = ({ target }) => {
        let { name, value } = target
        this.setState({
            [name]:value,
        })            
    }

    mandarPadre = () => {
        let mandar = {
            id:this.props.identi,
            nota:this.state.nota,
            tags:this.state.tags,
        }
        this.props.guardarApunte(mandar)
    }

    render() {
        let { apunte } = this.props;        
        if (!apunte.listo) {
            return (
                <div className="card">
                    <div className="card-content">
                        <div className="input-field">
                            <textarea name="nota" id="textarea1" placeholder="Apunte" className="materialize-textarea green-text text-light-green text-darken-4" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix teal-text text-darken-3">bookmark</i>
                            <input name="tags" className="green-text text-light-green text-darken-4" id="icon_prefix" placeholder="Tags" type="text" onChange={this.handleChange}></input>
                        </div>
                        <div className="row">
                            <div className="col s4">
                                <p className="green-text text-light-green text-darken-4">{apunte.fecha}</p>
                            </div>
                            <div className="col s2" />
                            <div className="col s6">
                                <a className="waves-effect waves-light btn teal darken-3" onClick={this.mandarPadre}>
                                <i className="material-icons">save</i></a>
                                <a className="waves-effect waves-light btn teal darken-3" onClick={()=> {this.props.eliminarApunte(this.props.identi)}}>
                                <i className="material-icons">delete</i></a>
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
                            <p className="green-text text-light-green text-darken-4">{apunte.nota}</p>
                        </div>
                        <div className="row"></div>
                        <div className="col s2"><i className="small material-icons teal-text text-darken-3">bookmark</i></div>
                        <div className="col s10"><p className="green-text text-light-green text-darken-4">{apunte.tags}</p></div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="col s4">
                                <p className="green-text text-light-green text-darken-4">{apunte.fecha}</p>
                            </div>
                            <div className="col s2" />
                            <div className="col s6">
                                <a className="waves-effect waves-light btn teal darken-3" onClick={()=> {this.props.eliminarApunte(this.props.identi)}}>
                                <i className="small material-icons">delete</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default Apunte;
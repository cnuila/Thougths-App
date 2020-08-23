import React from 'react'

class Apunte extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="col s4">
                <div class="card">
                    <div class="card-content">
                        <div className="input-field">
                            <textarea id="textarea1" placeholder="Apunte" class="materialize-textarea"></textarea>
                        </div>
                        <div className="input-field">
                            <i class="material-icons prefix">bookmark</i>
                            <input id="icon_prefix" placeholder="Tags" type="text"></input>
                        </div>
                        <div className="row">
                            <div className="col s4">21/8/2020</div>
                            <div className="col s2"/>
                            <div className="col s6">
                                <a class="waves-effect waves-light btn green lighten-1"><i class="material-icons">save</i></a>
                                <a class="waves-effect waves-light btn green lighten-1"><i class="material-icons">delete</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Apunte;
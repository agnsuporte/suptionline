import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Button, TextField } from "@material-ui/core";

import { urls } from "../../../util/urlUtils";
import FirebaseService from "../../../services/FirebaseService";

class Add extends Component {

    state = { id: null, number: '', password: '', description: '', date: '' };

    componentWillMount = async () => {

        const { id } = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({ id });
            await FirebaseService.getUniqueDataBy(id, 'remote/teamviewer', (data) => this.setState({ ...data }));
        }
    };

    submit = (event) => {
        event.preventDefault();

        let objToSubmit = {
            number: this.state.number,
            password: this.state.password,
            description: this.state.description,
            date: this.state.date
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('remote/teamviewer', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'remote/teamviewer', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };

    cancel = () => this.props.history.push(urls.data.path);

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (<React.Fragment>

            <form onSubmit={this.submit}>

                <TextField className="input-field"
                    type="text"
                    value={this.state.number}
                    label="Informe ID"
                    required
                    onChange={this.handleChange('number')} />

                <TextField className="input-field"
                    type="text"
                    label="Senha"
                    value={this.state.password}
                    required
                    onChange={this.handleChange('password')} />

                <TextField className="input-field"
                    type="text"
                    label="Observações"
                    value={this.state.description}
                    required
                    onChange={this.handleChange('description')} />

                <TextField className="input-field"
                    type="date"
                    label=""
                    value={this.state.date}
                    required
                    onChange={this.handleChange('date')} />

                <Button type="submit" color="primary" variant="outlined"
                    style={{ marginTop: '20px', marginLeft: '10px', padding: "15px 30px", }}>
                    Salvar
                </Button>

                <Button color="secondary" variant="outlined" onClick={() => this.cancel()}
                    style={{ marginTop: '20px', marginLeft: '10px', padding: "15px 30px" }}>
                    Voltar
                </Button>

            </form>
        </React.Fragment>)
    }
}

export default withRouter(Add);
import { Button, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import FirebaseService from "../../services/FirebaseService";
import { urls } from "../../util/urlUtils";
import { withRouter } from "react-router-dom";

class Add extends Component {

    submit = (event) => {
        event.preventDefault();

        const { number } = this;
        const { password } = this;
        const { description } = this;
        const { date } = this;

        // const newid = FirebaseService.pushData('leituras', {

        FirebaseService.pushData('remote/teamviewer', {
            number,
            password,
            description,
            date
        });

        this.props.history.push(urls.data.path);

    };

    render = () => (<React.Fragment>

        <Typography variant="headline" component="h2">Novo</Typography>
        <form onSubmit={this.submit}>

            <TextField className="input-field"
                type="text"
                defaultValue={''}
                label="Informe ID"
                required
                onChange={e => this.number = e.target.value} />


            <TextField className="input-field"
                type="text"
                label="Senha"
                defaultValue={''}
                required
                onChange={e => this.password = e.target.value} />


            <TextField className="input-field"
                type="text"
                label="Observações"
                defaultValue={''}
                required
                onChange={e => this.description = e.target.value} />


            <TextField className="input-field"
                type="date"
                label=""
                defaultValue={''}
                required
                onChange={e => this.date = e.target.value} />

            <Button type="submit"
                style={{ marginTop: '20px', display: 'inline-block' }}>
                Salvar
            </Button>
        </form>
    </React.Fragment>)
}

export default withRouter(Add);
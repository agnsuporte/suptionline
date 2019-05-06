import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirebaseService from './services/FirebaseService';

import { urls, privateUrls } from "./util/urlUtils";
import { Welcome } from './components/Welcome/Welcome';
import { DataTable } from './components/DataTable/DataTable';
import Add from './components/Add/Add';

class Routes extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        FirebaseService.getDataList('remote/teamviewer', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path={urls.home.path} component={Welcome} />

                    <Route exact
                        path={urls.data.path}
                        render={(props) =>
                            <DataTable {...props} data={this.state.data} />}
                    />

                    <Route exact
                        path={urls.add.path} component={Add} />

                    <Route exact
                        path={privateUrls.edit.path}
                        render={(props) => <Add {...props} />}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
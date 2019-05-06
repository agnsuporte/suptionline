import React from 'react';
import { Route } from 'react-router-dom';

import { MuiThemeProvider } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, red } from '@material-ui/core/colors';

import { TopBar } from '../TopBar/TopBar';
import { urls, privateUrls } from "../../util/urlUtils";
import Welcome from '../../components/Welcome/Welcome';
import DataTable from '../../components/acesso-remoto/DataTable/DataTable';
import Add from '../../components/acesso-remoto/Add/Add';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: red
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>

        <TopBar />

        <Card style={{ margin: '50px' }}>
          <CardContent>
            <Route exact
              path={urls.home.path}
              render={(props) => <Welcome {...props} />}
            />

            <Route exact
              path={urls.data.path}
              render={(props) =>
                <DataTable {...props} />}
            />

            <Route exact
              path={urls.add.path}
              render={(props) =>
                <Add {...props} />}
            />

            <Route exact
              path={privateUrls.edit.path}
              render={(props) => <Add {...props} />}
            />

          </CardContent>
        </Card>

      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
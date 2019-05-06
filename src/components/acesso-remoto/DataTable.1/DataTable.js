import React from 'react';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import FirebaseService from '../../../services/FirebaseService';
import { urls, privateUrls } from '../../../util/urlUtils';

export const DataTable = ({ data }) => {

    const remove = (id) => {
        const resp = window.confirm("Deseja realmente excluir este item?");
        if (resp) {
            FirebaseService.remove(id, 'remote/teamviewer');
        }
    };

    return (
        <React.Fragment>

            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <h2>Acesso Remoto</h2>
                </Grid>
                <Grid item xs={6} >
                    <div className="btn-cicle">
                        <Fab color="primary" aria-label="Add" component={props =>
                            <Link to={urls.add.path} {...props} />
                        }>
                            <AddIcon />
                        </Fab>
                    </div>
                </Grid>
            </Grid>

            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Senha</TableCell>
                        <TableCell>Descrição</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) =>
                            <TableRow key={item.key}>
                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.password}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell  >
                                    <div style={{ float: 'right' }}>
                                        <Button color="secondary" style={{ margin: '6px' }}
                                            onClick={() => remove(item.key)} size="small"><DeleteIcon />
                                        </Button>
                                        <Button color="primary" component={props =>
                                            <Link to={privateUrls.edit.pathWithouParam + item.key}  {...props} />}
                                            size="small"
                                        ><EditIcon />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    )
};
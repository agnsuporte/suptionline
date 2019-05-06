import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import { urls } from "../../util/urlUtils";

export const TopBar = () => <AppBar position="static">
    <Toolbar>

        <IconButton color="inherit" aria-label="Menu"
            component={props =>
                <Link to={urls.home.path} {...props} />}
        >
            <MenuIcon />
        </IconButton>

        <Typography type="title" color="inherit">
            Suporte de TI
        </Typography>

    </Toolbar>
</AppBar>;
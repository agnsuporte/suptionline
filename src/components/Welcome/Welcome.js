import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { urls } from "../../util/urlUtils";


const styles = () => ({
    root: {
        padding: "50px 100px",
        zIndex: 999,
        position: "absolute"
    },
    card: {
        display: "flex",
        height: "calc(100vh - 100px)"
    },
    rightBorder: {
        borderRight: "solid #d0D0D0 1px"
    },
    content: {
        marginTop: 0
    },
    background: {
        position: "absolute",
        height: 200,
        width: "100%",
        top: 0,
        background: "#7159C1"
    },
    rightContainer: {
        background:
            "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
        flex: 1
    },
    heightAdjust: {
        display: "flex",
        flexDirection: "column"
    },
    paper: {
        background: "#9de1fe",
        padding: 20
    },
    information: {
        color: "#444"
    }
});

const Welcome = () => {
    return (
        <React.Fragment>

            <h1>Bem vindo!</h1>

            {
                Object.values(urls).map((url, index) => {
                    return <Button
                        key={index}
                        component={props =>
                            <Link to={url.path} {...props} />
                        }
                    >
                        {url.name}
                    </Button>
                })
            }

        </React.Fragment>
    )
};

export default withStyles(styles)(Welcome);
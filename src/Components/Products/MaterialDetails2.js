import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 475,
        height: 175,
        marginLeft: "5px",
        marginTop: "10px",
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
    },

    title: {
        fontSize: 34,
        fontWeight: 700,
        [theme.breakpoints.down('xs')]: {
            minWidth: 20,
            fontSize: 20,

        },
    },
    pos: {
        marginBottom: 12,
        fontWeight: 300,
        fontSize: 25,
        [theme.breakpoints.down('xs')]: {
            minWidth: 20,
            fontSize: 15,

        },
    },
}));

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Description
                </Typography>
                <Typography className={classes.pos} >
                    This Product is only available in Olx.pk.
                </Typography>
            </CardContent>
        </Card>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Product.css";

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
        fontWeight: 700,
            fontSize: 25,
            [theme.breakpoints.down('xs')]: {
                minWidth: 20,
                fontSize: 15,
        
        },
},
}));

export default function OutlinedCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {props.name}
                </Typography>
                <Typography className={classes.pos} >
                    {props.price}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.date}
                </Typography>
            </CardContent>
        </Card>
    );
}

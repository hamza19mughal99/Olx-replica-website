import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Product.css";


const useStyles = makeStyles((theme) => ({
    root: {
        Width: "100%",
        height: 430,
        marginLeft: "25px",
        marginTop: "15px",
    },
    media: {
        width: 300,
        height: 240,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    return (
        <div >
                        <Card className="card-div" className={classes.root}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                className={classes.media}
                                image={props.img}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography style={{fontWeight:"700" , fontSize:"1rem"}} variant="body2"  component="p">
                                    {props.name}
                                </Typography>
                                <Typography style={{fontWeight:"700"}} variant="body2"  component="p">
                                    {props.price}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <p>{props.date}</p>
                            </CardActions>

                        </Card>
                    </div>
                
    );
}

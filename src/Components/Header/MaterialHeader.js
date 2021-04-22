import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from "../../images/logo.png";
import Button from '@material-ui/core/Button';
import "./Header.css";



const currencies = [
    {
        value: 'PKR',
        label: "Pakistan",
    },
    {
        value: 'IR',
        label: 'India',
    },
    {
        value: 'BD',
        label: 'Bangladesh',
    },
    {
        value: 'AA',
        label: 'Afghanistan',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
            color: "#000"
        },

        root1: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('PKR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        //Logo

        <div className="main-header-div">
            
                    <div className="header-logo"> <img style={{ width: "60px" }} src={Logo} alt="logo" /> </div>

                    <div>
                        <div className="section1">
                            <form className={classes.root} noValidate autoComplete="off">
                                <div>
                                    <TextField
                                        select
                                        className="dropdown"
                                        value={currency}
                                        onChange={handleChange}
                                        variant="outlined"
                                        color="blue">

                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </form>
                            <TextField
                                id="outlined-full-width"
                                className="textfield"
                                placeholder="Find Cars, Mobile Phones and more..."
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className="header_login">
                        <div className={classes.root1} >
                            <Button className="login-btn">Login</Button>
                        </div>
                        <Button className="seller-btn">
                            SELL
                        </Button>
                    </div>
                </div>
           
    );
}

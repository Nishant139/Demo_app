import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {Button} from "@mui/material";
import { TextField } from "@mui/material";


function Login(){
    return(
        <>
        <Header></Header>
        <h1>Login or Create account</h1><br></br>
        <h4>Register Component</h4><br/>
        <TextField id="outlined-basic" label="Email addres" variant="outlined"/>
        {' '}
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
        <br />
        <Button variant="contained"><Link to="/register">Register</Link></Button>
        <br></br>
        
        </>
    );
}
export default Login;
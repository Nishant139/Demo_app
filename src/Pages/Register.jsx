import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

function Register(){
    return(
        <>
        <h1>Login or Create</h1><br/>
        <h4>Personal Information</h4>

        <Button variant="outlined"><Link to="/ProductList">ProductList</Link></Button> 
        <br></br>
        <Footer></Footer>
        </>
    );
}
export default Register;
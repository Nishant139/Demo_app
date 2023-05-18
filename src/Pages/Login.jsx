import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Login(){
    return(
        <>
        <Header></Header>
        <h1>Login Component</h1><br></br>
        <Link to="/register">Register</Link><br></br>
        <Link to="/product-list">Login</Link><br></br>

        </>
    );
}
export default Login;
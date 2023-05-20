import React from "react";

import { Button,TextField,IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <h6>Header Works</h6>   
      
            {"   "}
            <Button variant="contained"><Link to="/register">Register</Link></Button>
            {'         '}
            <Button variant="contained"><Link to="/login">Login</Link></Button>     
        </>
    );
}
export default Header;
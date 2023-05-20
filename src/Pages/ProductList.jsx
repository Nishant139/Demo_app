import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ProductList(){
    return(
        <>
        <Header></Header>
        <h1>Product List Component</h1>
        <Footer></Footer>
        </>
    );
}

export default ProductList;
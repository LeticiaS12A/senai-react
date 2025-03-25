import React from "react";
import './App.css';

import Header from "./componentes/Header";
import HomePage from "./componentes/HomePage";
import Footer from "./componentes/Footer";

export default function App(){
    return(
        <div className="app">
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    )
}

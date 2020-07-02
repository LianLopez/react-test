import React from "react";
import Nav from "./Nav";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1 className="title">DIGITAL DEPLOY</h1>
            <Nav />
        </div>
    );
}

export default Header;

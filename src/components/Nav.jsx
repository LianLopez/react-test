import React from "react";
import Clima from "./Clima";

function Nav() {
    return (
        <div className="nav-p">
            <div className="nav-i">
                <a className="link" href="/">
                    Home
                </a>
            </div>
            <div className="nav-i">
                <a className="link" href="/contact">
                    Contact
                </a>
            </div>
            <div className="nav-i">
                <a className="link" href="/about">
                    About
                </a>
            </div>
            <Clima />
        </div>
    );
}

export default Nav;

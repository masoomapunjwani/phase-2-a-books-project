import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return(
        <div className="navbar">
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" :"close"}>
                    <div className="image">
                    </div>
                    <div className = "hiddenLinks">
                        <Link to = "/"> Home </Link>
                        <Link to = "/menu"> Menu </Link>
                        <Link to = "/about"> About </Link>
                        <Link to = "/contact"> Contact </Link>
                    </div>
                    <div className = "rightSide">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                    </div>
                    </div>
                </div>
                <button className="click" onClick={toggleNavbar}></button>
            </div>
    )
}

export default Navbar;
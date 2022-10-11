import React from "react";
import { Link } from "react-router-dom";
import Book2 from "../assets/book2.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${Book2})` }}>
            <div className="headerContainer">
                <h1> BOOKS PROJECT </h1>
                <p> <strong> BOOKS ARE THE GREAT KNOWLEDGE</strong></p>
                <Link to="/book">
                    <button className="btn"> ORDER NOW </button>
                </Link>
            </div>
        </div> 
    );
}

export default Home;
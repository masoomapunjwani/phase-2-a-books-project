import React, { useState, useEffect } from "react";
// import { MenuList } from "./MenuList";
import bookItem from "./bookItem";
import "../styles/Menu.css";


function book() {
    const[book, setbook]= useState([])
    useEffect(()=>{
        fetch ("https://phase-2-pizzaina-projo.herokuapp.com/products")
        .then(resp => resp.json())
        .then(data => setbook(data))
    },[])

    return (
        <div className="book">
            <h1 className="bookTitle">Our Books</h1>
            <div className="bookList">
                {menu.map((bookItem) => {
                    return (
                        <bookItem
                            key={bookItem.name}
                            image={bookItem.image}
                            name={bookItem.name}
                            price={bookItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default book;
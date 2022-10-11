import BookItem from "./BookItem";
import React, { useState, useEffect } from "react";
import "../styles/Menu.css";


function Book() {
    const[book, setbook]= useState([])
    useEffect(()=>{
        fetch ("https://ebooks-lib-api.herokuapp.com/ebooks")
        .then(resp => resp.json())
        .then(data => setbook(data))
    },[])
    
    return (
        <div className="book">
            <h1 className="bookTitle">Our Books</h1>
            <div className="bookList">
                {book.map((bookItem) => {
                    return (
                        <BookItem
                            key={bookItem.title}
                            image={bookItem.image}
                            title={bookItem.title}
                            date={bookItem.publishedDate}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Book;
import React from "react";

function bookItem({image, title, date}) {
    return(
        <div className="bookItem">
            <div>
                <img src={image} alt="poster" />
            </div>
            <h1> {title} </h1>
            <p> publishedDate: {date} </p>
        </div>
    );
}

export default bookItem;
import React from "react";

function bookItem({image, name, price}) {
    return(
        <div className="bookItem">
            <div style={{backgroundImage: `url(${image})`}}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    );
}

export default bookItem;
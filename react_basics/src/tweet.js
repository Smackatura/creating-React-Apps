import React from "react";
import "./App.css"
//rather than writing props we can add curly braces and add two parameters.
function Tweet({name,msg,likes}){
    // inside our functions parameter we can add "props"
    //what is a props? its an arguement much like the variable substitution in python
    //ex: {name} will loop through the list of names to render each name.
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{msg}</p>
            <p>{likes}</p>
        </div>
    );
}

// then we export it so we may use it in our app.js
export default Tweet;
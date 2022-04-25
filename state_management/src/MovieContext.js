import React, { useState, createContext } from 'react';
// created a movie context
export const MovieContext = createContext();

// we're creating a movie provider \, its job is just to hold the content and pass it down to the child component
export const MovieProvider = props => {
    const [movies, setMovies] = useState([{
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "Game of Thrones",
            price: '$10',
            id: 23324
        },
        {
            name: "Inception",
            price: '$10',
            id: 23524
        }
    ]);
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}
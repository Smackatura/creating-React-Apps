import React, {useContext} from 'react';
import {MovieContext} from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav>
            <h3>Sal</h3>
            <ul className="nav-links">
                    <li>List of Movies: {movies.length}</li>
            </ul>
        </nav>
    );
}

export default Nav;
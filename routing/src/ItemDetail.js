import React, { useState, useEffect } from 'react';
import './App.css';



function Item( match) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${item.id}`);
        const Item = await fetchItem.json();

        console.log(Item);
    }
    
    return (
        <div>
            <h1>{Item.id}</h1>
        </div>
    );
}

export default Item;

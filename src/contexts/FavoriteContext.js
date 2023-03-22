import {useState, createContext} from 'react'
import React from 'react';

//1 - create blank context
export const FavoriteContext = createContext();
//2 - assign a value
//3 - provide value to children
export default function FavoriteContextProvider(props){
    //create my global state
    const [favorites, setFavorites] = useState([])

    return(
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            {props.children}
        </FavoriteContext.Provider>
    )

}
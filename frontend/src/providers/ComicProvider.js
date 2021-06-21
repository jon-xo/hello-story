import React, { useState, createContext } from "react"

export const ComicContext = createContext();

export const ComicProvider = (props) => {
    const [ previousComics, setPreviousComics ] = useState([]);
    const [ currentComics, setCurrentComics ] = useState([]);
    const [ newComics, setNewComics ] = useState([]);
    const CV_API_KEY = process.env.REACT_APP_COMIC_API_KEY;
    const SB_API = 'https://api.shortboxed.com/comics/v1'
    const API_PROXY = 'http://localhost:5000'

    const getNewComics = () => {
        return fetch(`${API_PROXY}/upcoming`, {
            method: "GET"
        })
        .then((r) => r.json())
        .then(setNewComics);
    }; 
    
    const getPreviousComics = () => {
        return fetch(`${API_PROXY}/previous`, {
            method: "GET"
        })
        .then((r) => r.json())
        .then(setPreviousComics)
    };

    const getCurrentComics = () => {
        return fetch(`${API_PROXY}/current`, {
            method: "GET"
        })
        .then((r) => r.json())
        .then(setCurrentComics);
    };

    return (
        <ComicContext.Provider value={{ 
            previousComics, 
            newComics,
            setPreviousComics, 
            setNewComics,
            currentComics,
            setCurrentComics,
            getNewComics,
            getPreviousComics,
            getCurrentComics
        }}>
            {props.children}
        </ComicContext.Provider>
    )
};
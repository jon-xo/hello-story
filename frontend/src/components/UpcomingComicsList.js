import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom"
import { ComicContext } from "../providers/ComicProvider";
import { Section, Container } from "react-bulma-components";
import Comic from "./Comic"
import "../index.css"


const UpcomingComicsList = () => {
    const { newComics, getNewComics } = useContext(ComicContext);

    useEffect(() => {
        getNewComics();
    }, [])

    return (
            <Section>
            <h2 className="title is-2">Upcoming Comics</h2>
                <Container fluid='true' className='comic-container'>
                {newComics.comics?.map((comic) => (                
                    <Comic key={comic.diamond_id} comic={comic} />
                ))}
                </Container>
            </Section>
    ); 
};

export default UpcomingComicsList;
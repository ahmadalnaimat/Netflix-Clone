
import ModalMovie from "./ModalMovie";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import { Row, Col, Card, Button } from 'react-bootstrap';

function MovieList({ moviesData, isFavPage }) {

    const [show, setShow] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});


    const handleClose = () => {
        setShow(false)
    }

    const showModal = (item) => {
        setShow(true)
        console.log(item);
        setClickedMovie(item)
    }











    const updateFavoriteMovies = (data) => {
        setMoviesFavorite(data);
    }



    return (
        <>
        <Row>
                    {moviesData.map(item => (
                        <Col key={item.id}>
                            <Movie item={item} showModal={showModal} />
                        </Col>
                    ))}
                    <ModalMovie show={show} handleClose={handleClose} clickedMovie={clickedMovie} />
                </Row>
            
        </>

    );
}

export default MovieList;
import axios from "axios";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function Home() {

    const [moviesData, setMoviesData] = useState([]);

    const getAllMovies = () => {

        const serverURL = `http://localhost:3000/trending`;

        axios.get(serverURL)
            .then(response => {
                // console.log(response.data);
                setMoviesData(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <>
            <MovieList moviesData={moviesData} />
        </>
    )
}

export default Home;

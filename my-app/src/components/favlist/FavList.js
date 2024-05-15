import './FavList.css'
import MovieList from '../movielist/MovieList.js';
function FavList() {
    return (<>
        <MovieList isFav={true}/>
    </>)
}

export default FavList;
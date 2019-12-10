import React, { Component } from 'react';
import MovieCard from './MovieCard'
class MovieList extends Component {
    state = {  }
    render() {
        const movies =this.props.MovieList
        let MoviesJSX=[];
        MoviesJSX =  movies.map((currentMovie,i) =>
                    <MovieCard key={i} title={currentMovie.movieTitle} year={currentMovie.movieYear} rating={currentMovie.movieRating}/>
                ) 
        return ( <div className="movie-container">
            {MoviesJSX}
        </div>
         );
    }
}
export default MovieList;
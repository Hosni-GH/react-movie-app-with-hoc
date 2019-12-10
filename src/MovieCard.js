import React, { Component } from 'react';
class MovieCard extends Component {
    render() { 
        let movierate=this.props.rating,rating=''
        switch (movierate){
            case 1:
                rating=<span className='movie-stars'><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>;break;
            case 2:
                rating=<span className='movie-stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>;break;
            case 3:
                rating=<span className='movie-stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>;break;
            case 4:
                rating=<span className='movie-stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>;break;
            case 5:
                rating=<span className='movie-stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;break;
            default:
                rating=<span className='movie-stars'><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>
        }
        return ( 
            <div className="movie-item">
                <div className="movie-rating">
                    {rating}
                </div>
                <div className="movie-footer">
                    <span className="movie-title">{this.props.title}</span>
                    <span> - </span>
                    <span className="movie-year">{this.props.year}</span>
                </div>
            </div>
         );
    }
}
export default MovieCard;
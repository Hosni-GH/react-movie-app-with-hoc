import React, { Component } from 'react';
import MovieList from './MovieList';
import HOC from "./HOC";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    searchKeyword:'',
    addMovieTitle:'',
    addMovieYear:'',
    addMovieRating:'',
    display:false,
    searchStars:5,
    filterOn:false,
    movies:[
      {
          movieTitle:"Inception",
          movieYear: 2010,
          movieRating: 5
      },
      {
        movieTitle:"Titanic",
        movieYear: 1997,
        movieRating: 2  
      },
      {
        movieTitle:"Blade Runner",
        movieYear: 2017,
        movieRating: 4   
      }
    ]
   }
  }
  handleChange =(e)=>{
    this.setState({
      searchKeyword:e.target.value
    })
  }
  starFilter=(e)=>{
    this.setState({
      searchStars:e
    })
  }
  search=()=>{
   // if ( var n = str.indexOf(this.state.searchKeyword)
   
   const myFilteredArray = this.state.movies.filter(myMovie =>(myMovie.movieTitle.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase())>=0)&&myMovie.movieRating>=this.state.searchStars);
   this.setState({
     filterOn:true,
     filtredtable:myFilteredArray
   })
  }
  resetFilter=()=>{
    this.setState({
      filterOn:false
    })
  }
  handleChangeAdd = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  add=()=> {
    this.setState ({
      movies : [...this.state.movies,{movieTitle:this.state.addMovieTitle , movieYear:this.state.addMovieYear , movieRating:parseInt(this.state.addMovieRating)}], 
      display : !this.state.display
     
    })
  }
  render() {
    return ( 
      <div className="App">
        {console.log(this.state.movies)}
        <div className="search-form">
          <input type="text" placeholder="Type movie name to search" onChange={(e)=>this.handleChange(e)}/>
          <span onClick={()=>this.search()} className="search-me">Search</span>
          <div>
            <span>Minumum rating</span>
            <span className='movie-stars'><i className="far fa-star" onClick={()=>this.starFilter(1)}></i><i className="far fa-star" onClick={()=>this.starFilter(2)}></i><i className="far fa-star"onClick={()=>this.starFilter(3)}></i><i className="far fa-star" onClick={()=>this.starFilter(4)}></i><i className="far fa-star" onClick={()=>this.starFilter(5)}></i></span>
          </div>
          <div onClick={this.resetFilter}><span className="reset-me">reset</span></div>
        </div>
        <MovieList MovieList={!this.state.filterOn?this.state.movies:this.state.filtredtable}/>
        <div className="btn-plus-container">
          <div className="btn-div" onClick ={()=>this.setState({display:!this.state.display})}>
            <p>+</p>
          </div>
        </div>
      
      <div className ={this.state.display ? "display":"hidden"}>
        <div className="display-container">
          <h2>Add a movie:</h2>
        <input type="text" placeholder="name" name="addMovieTitle" onChange={this.handleChangeAdd} />
        <input type="text" placeholder="year" name="addMovieYear" onChange={this.handleChangeAdd} />
        <input type="text" placeholder="rating" name="addMovieRating" onChange={this.handleChangeAdd} />
        <button onClick={this.add}>Add</button>
        </div>
      </div>
      </div>
     );
  }
}
export default HOC(App);
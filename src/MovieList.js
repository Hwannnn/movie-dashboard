import React, { Component } from 'react';
import Movie from './Movie';
import './MovieList.css';

class MovieList extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(movies => movies.json())
    .then(json => json.data.movies)
    .catch(error => error);
  };


  render() {
    return (
      <div className={this.state.movies ? "App" : "App_Loading"}>
        {
          this.state.movies ? this._renderMovies() : "Loading..."
        }
      </div>
    )
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                    key={movie.id} />  
    });

    return movies;
  }

}

export default MovieList;

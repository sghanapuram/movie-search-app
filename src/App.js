import React, { useState } from 'react';
import MovieThumbnail from './components/MovieThumbnail';

import './App.css';

const App = () => {
    const[query, setQuery] = useState('');
    const[movieList, setMovieList] = useState(null);
    const getMovieList = (text) => {
        setQuery(text);
        if (text !== '') {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=d7a3a18bf1f75a32e20a4c21012ba47b&query=${encodeURIComponent(text)}`
            ).then(response => response.json()).then((data) => {
                setMovieList(data.results);
            });
        }
    }
    return (
        <div className="app">
            <header className="header">
                Movie Search App
            </header>
            <main className="body">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-field"
                        value={ query }
                        onChange={ (e) => getMovieList(e.target.value) }
                    />
                </div>
                {
                    movieList && <MovieThumbnail list={ movieList } />
                }
            </main>
        </div>
    );
};

export default App;

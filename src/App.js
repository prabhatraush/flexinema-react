import React from 'react';
import './App.scss';
import Banner from './Component/Banner';
import Header from './Component/Header';
import MoviesList from './Component/MoviesList';
import  Urls from './Urls';

function App() {

  console.log(Urls, process.env.REACT_APP_TMDB_API);

  return (
    <div className="App">
      <Header/>
      <Banner />

      <MoviesList categories="Upcoming & Latest Movies" url={Urls.fetchLatest}/>
      <MoviesList categories="Trending Now" url={Urls.fetchTrending}/>
      <MoviesList categories="Top Rated" url={Urls.fetchTopRated} />
      <MoviesList categories="Action Movies" url={Urls.fetchActionMovies} />
      <MoviesList categories="Horror Movies" url={Urls.fetchHorrorMovies} />
      <MoviesList categories="Romance Movies" url={Urls.fetchRomanceMovies} />
      <MoviesList categories="Comedy Movies" url={Urls.fetchComedyMovies} />

    </div>
  );
}

export default App;

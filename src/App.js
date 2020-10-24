import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom';

import FoundMovies from './Component/FoundMovies';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Header from './Component/Header';
import MoviesList from './Component/MoviesList';
import  Urls from './Urls';


function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={props =>
          <div>
              <Banner />
              <MoviesList categories="Upcoming & Latest Movies" url={Urls.fetchLatest}/>
              <MoviesList categories="Trending Now" url={Urls.fetchTrending}/>
              <MoviesList categories="Top Rated" url={Urls.fetchTopRated} />
              <MoviesList categories="Action Movies" url={Urls.fetchActionMovies} />
              <MoviesList categories="Horror Movies" url={Urls.fetchHorrorMovies} />
              <MoviesList categories="Romance Movies" url={Urls.fetchRomanceMovies} />
              <MoviesList categories="Comedy Movies" url={Urls.fetchComedyMovies} />
          </div>
      } />
      <Route path="/search-result/:qid" component={FoundMovies}/>
      <Footer />

    </div>
  );
}

export default App;

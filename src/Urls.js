
const api_key = process.env.REACT_APP_TMDB_API;
//console.log(api_key);

const Urls = {
    fetchLatest:`/movie/upcoming?api_key=${api_key}&language=Hi&page=1`,
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchOriginals:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=10751`,// family movies
    searchMovies:`/search/movie?api_key=${api_key}&query=`
}

export default Urls
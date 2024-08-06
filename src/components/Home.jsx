import React,{useState,useEffect} from 'react'
import Paginations from './Paginations.jsx';
import MovieCard from './MovieCard.jsx';
import Banner from './Banner.jsx';
import axios from 'axios';



function Movies() {
  const [movies, setMovies] = useState([])

  const[pageNo,setPageNo]=useState(1);
  const[watchList,setWatchList]=useState([]);

  useEffect(() => {
    // Fetch the image from the provided URL
    const imageUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=71c51351382d7a83df322f402daafa69&language=en-US&page=${pageNo}`;
    axios
      .get(imageUrl)
      .then((response) => {
        console.log('Movie list in home component',response);
        setMovies(response.data.results);
        
        
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [pageNo]);


  useEffect( () =>{
    console.log("inside watchlist")
    const watchListMovies= localStorage.getItem('movies');
    console.log("watchlist",watchListMovies);
    if(watchListMovies){
      setWatchList( JSON.parse(watchListMovies));
    }
  },[])




  const handleNext=()=>{
    setPageNo(pageNo+1);
  }

  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(1);
    }
    else{
    setPageNo(pageNo-1);
    }
  }

  const addToWatchList = function (movieObj) {
    const updatedMovies=[...watchList,movieObj];
    setWatchList(updatedMovies);
    localStorage.setItem('movies',JSON.stringify(updatedMovies));
  }

  const removeFromWatchList = function (movieObj) {
    const filteredMovies=watchList.filter((watchListMovie)=>{
      return movieObj.id!==watchListMovie.id;
    })

    setWatchList(filteredMovies);
    localStorage.setItem('movies',JSON.stringify(filteredMovies));
  
    
  }

  return <>
  <div className='text-2xl font-bold text-center m-4'>
      <h2 >Trending Movies</h2>
      <div className='flex justify-evenly flex-wrap gap-6' >
        {movies.map( (movieObj,index) => <MovieCard 
        movieObj={ movieObj}
        index={index} 
        watchList={watchList} 
        addToWatchList = {addToWatchList} 
        removeFromWatchList={removeFromWatchList}/> )}

        
          
      </div>
     
  </div>

  {/* pagination */}
  <Paginations handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} />
  
  </>
}
const home = () => {
  return (
    <div>
      Home
      <Banner/>
      <Movies/>
    </div>
  )
}

export default home

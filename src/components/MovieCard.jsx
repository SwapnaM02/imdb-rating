import React,{useState} from 'react'

const MovieCard = (props) => {
    console.log("in movie card props",props);
    

    const {addToWatchList,removeFromWatchList,index,movieObj,watchList}=props;

    // const [isMoviesPresentInWatchList,setisMoviesPresentInWatchList]=useState(false);

    // const addtolist=(obj)=>{
    //   addToWatchList(obj)
    //   setisMoviesPresentInWatchList(true);
      

    // }

    // const removelist=(obj)=>{
    //   removeFromWatchList(obj)
    //   setisMoviesPresentInWatchList(false);

    // }

    const isMoviePresentInWatchList = () => {
      // if id is present in movies present in watchListArr. > true : else false

      for (let i = 0; i < watchList.length; i++) {
          if (watchList[i].id === movieObj.id) {
              return true;
          }
      }

      return false;

  }

    

  return (
    <div className='text-2xl font-bold text-center m-4'>
      {/* <h2 >Trending Movies</h2> */}
      <div className='flex justify-evenly flex-wrap gap-6' >
        
          
            <div 
            className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 key={props.index}' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}} key={index}>


              {isMoviePresentInWatchList()?
                  <div className='m-4 bg-gray-700/60 justify-center itens-center rounded-md flex h-8 w-8' onClick={()=>removeFromWatchList(movieObj) }>
                    ❌
                    </div>:
                    <div className='m-4 bg-gray-700/60 justify-center itens-center rounded-md flex h-8 w-8' onClick={()=>addToWatchList(movieObj)  }>😍</div>

              }
              
               

              


              <div className='text-white w-full text-center pl-2 rounded-lg bg-gray-900/50'>{movieObj.title}</div>

            </div>

          
        
      </div>
  </div>
  ) 
}

export default MovieCard

import React, { useState, useEffect } from 'react';
import genreids from '../constants';

const All_GENRES = 'All genres';

const getGenreName = genre_id => {
  return genreids[genre_id] || 'NA'; // Retrieve genre name or 'NA' if not found
};

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const [searchedStr, setSearch] = useState('');
  const [genreList, setGenreList] = useState([All_GENRES]);
  const [currGenre, setCurrGenre] = useState(All_GENRES);

  // Fetch movies from local storage on component mount
  useEffect(() => {
    const moviesFromLS = localStorage.getItem('movies');
    if (moviesFromLS) {
      setWatchList(JSON.parse(moviesFromLS));
    }
  }, []);

  // Update genre list whenever the watch list changes
  useEffect(() => {
    const tempArr = watchList.flatMap(movie => movie.genre_ids.map(getGenreName));
    const temp = new Set(tempArr); // Use a Set to get unique genres
    setGenreList([All_GENRES, ...temp]); // Update genre list with 'All genres' and unique genres
  }, [watchList]);

  // Sort movies in descending order based on ratings
  const handleDescRatings = () => {
    const sortedOrder = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sortedOrder);
  };

  // Sort movies in ascending order based on ratings
  const handleAscRatings = () => {
    const sortedOrder = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sortedOrder);
  };

  // Remove a movie from the watch list
  const removeFromWatchList = movieObj => {
    const filteredMovies = watchList.filter(watchListMovie => movieObj.id !== watchListMovie.id);
    setWatchList(filteredMovies);
    localStorage.setItem('movies', JSON.stringify(filteredMovies)); // Update local storage
  };

  // Filter watch list based on the current genre and search string
  const filteredWatchList = watchList
    .filter(movie =>
      currGenre === All_GENRES || movie.genre_ids.some(genre_id => getGenreName(genre_id) === currGenre)
    )
    .filter(movie => movie.title.toLowerCase().includes(searchedStr.toLowerCase()));

  return (
    <>
      {/* Genres */}
      <div className='flex justify-center m-4'>
        {genreList.map(genre => (
          <div
            key={genre}
            className={`flex justify-center items-center h-8 w-[300px] text-white font-bold rounded-xl mx-4 cursor-pointer ${
              currGenre === genre ? 'bg-blue-500' : 'bg-gray-500'
            }`}
            onClick={() => setCurrGenre(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Searching feature */}
      <div className='flex justify-center my-5'>
        <input
          placeholder='search movies'
          type='text'
          value={searchedStr}
          onChange={e => setSearch(e.target.value)}
          className='h-8 w-[300px] bg-gray-200 px-4 outline-none border-slate-700'
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <button onClick={handleAscRatings}>
                    <i className='fa-solid fa-arrow-up cursor-pointer pr-1 h-6 w-6'></i>
                  </button>
                  <div>Ratings</div>
                  <button onClick={handleDescRatings}>
                    <i className='fa-solid fa-arrow-down cursor-pointer pl-1 h-6 w-6'></i>
                  </button>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Delete</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredWatchList.map(movie => (
              <tr className="hover:bg-gray-50" key={movie.id}>
                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-fit"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
                </td>
                <td className="pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{movie.popularity}</td>
                <td className="pl-2 py-4 flex ">
                  {movie.genre_ids.map(num => (
                    <p className='ml-3 mt-[-100px]' key={num}>{getGenreName(num)}</p>
                  ))}
                </td>
                <td className='text-red-500 cursor-pointer' onClick={() => removeFromWatchList(movie)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;

//  import React, { useState, useEffect } from 'react';
//  import genreids from '../constants';

//  const All_GENRES='All genres';

// const getGenreName = genre_id => {
//   console.log(genreids[genre_id] || 'NA');
//   return genreids[genre_id] || 'NA';
// };

// const Watchlist = () => {
//   const [watchList, setWatchList] = useState([]);
//   const [searchedStr,setSearch]=useState('');
//   const [genreList,setGenreList]=useState([All_GENRES]);
//   const [currGenre,setCurrGenre]=useState(All_GENRES)

//   useEffect(() => {
//     let moviesFromLS = localStorage.getItem('movies');
//     if (moviesFromLS) {
//       setWatchList(JSON.parse(moviesFromLS));
//     }
//   }, []);

//   useEffect(()=>{
//     let tempArr=watchList.map((movie)=>{
//       console.log('movies in genere', movie);
//       return getGenreName(movie.genre_ids[0]);
//     })

//     let temp=new Set(tempArr);
//     setGenreList([All_GENRES,...temp]);

//     console.log('genres present:',tempArr);
//   },[watchList])

//   const handleDescRatings = () => {
//     console.log('Desc sort');
//     let sortedOrder = watchList.sort((a, b) => b.vote_average - a.vote_average);
//     setWatchList([...sortedOrder]);
//   };

//   const handleAscRatings = () => {
//     console.log('Asc sort');
//     let sortedOrder = watchList.sort((a, b) => a.vote_average - b.vote_average);
//     setWatchList([...sortedOrder]);
//   };

//   const removeFromWatchList = function (movieObj) {
//     const filteredMovies=watchList.filter((watchListMovie)=>{
//       return movieObj.id!==watchListMovie.id;
//     })

//     setWatchList(filteredMovies);
//     localStorage.setItem('movies',JSON.stringify(filteredMovies));
  
    
//   }

//   return (
//     <>
//     {/* Genres */}
//     <div className='flex justify-center m-4'>
//         {
//           genreList.map(genre => {
//             return <div className={
//               currGenre === genre
//                 ? 'flex justify-center items-center bg-blue-500 h-8 w-[300px] text-white font-bold rounded-xl mx-4 cursor-pointer'
//                 : 'flex justify-center items-center bg-gray-500 h-8 w-[300px] text-white font-bold rounded-xl mx-4 cursor-pointer'
//             }
//               onClick={() => setCurrGenre(genre)}>
//               {genre}
//             </div>
//           })
//         }
//       </div>

//       {/* searching feature implementated */}
//     <div className='flex justify-center my-5'>
//       <input placeholder='search movies'
//       type='text'
//       value={searchedStr}
//       onChange={(e)=>setSearch(e.target.value)} className='h-8 w-[300px] bg-gray-200 px-4 outline-none border-slate-700'/>

//     </div>
//     <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
//       <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
//         <thead>
//           <tr className="bg-gray-50">
//             <th className="px-6 py-4 font-medium text-gray-900">Name</th>
//             <th>
//               <div className="flex">
//                 <button onClick={handleAscRatings}><i className='fa-solid fa-arrow-up cursor-pointer pr-1 h-6 w-6' ></i></button>
//                 <div>Ratings</div>

//                 <button onClick={handleDescRatings}>
//                   <i className='fa-solid fa-arrow-down cursor-pointer pl-1 h-6 w-6' ></i>
                                
//                 </button>
//                 </div>
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Popularity</div>
//               </div>
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Genre</div>
//               </div>
//             </th>

//             <th>
//               <div className="flex">
//                 <div>Delete</div>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//           {watchList
//           .filter(movie=>{
//             if(currGenre==='All genres'){
//               return true;
//             }
//             else{
//               return currGenre===getGenreName(movie.genre_ids[0])
//             }
//           })
//           .filter((movie)=>movie.title.toLowerCase().includes(searchedStr.toLowerCase()))
//           .map((movie) => (
//             <tr className="hover:bg-gray-50" key={movie.id}>
//               <td className="flex items-center px-6 py-4 font-normal text-gray-900">
//                 <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
//                 <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
//               </td>
//               <td className="pl-6 py-4">{movie.vote_average}</td>
//               <td className="pl-6 py-4">{movie.popularity}</td>
//               <td className="pl-2 py-4 flex">
//                 {movie.genre_ids.map((num) => (
//                   <p className='ml-1' key={num}>{getGenreName(num)}</p>
//                 ))}
//               </td>
//               <td className='text-red-500' onClick={()=>removeFromWatchList(movie)}>Delete</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default Watchlist; 


// import React, { useState, useEffect } from 'react';
// import genreids from '../constants';


// const getGenreName = genre_id => {
//   console.log(genreids[genre_id] || 'NA');
//   return genreids[genre_id] || 'NA';
// };

// const Watchlist = () => {
//   const [watchList, setWatchList] = useState([]);

//   useEffect(() => {
//     let moviesFromLS = localStorage.getItem('movies');
//     if (moviesFromLS) {
//       setWatchList(JSON.parse(moviesFromLS));
//     }
//   }, []);

//   const handleDescRatings = (event) => {
//     console.log('Desc sort', event);
//     let sortedOrder = watchList.sort((a, b) => b.vote_average - a.vote_average);
//     setWatchList([...sortedOrder]);
//   };

//   const handleAscRatings = (event) => {
//     console.log('Asc sort', event);
//     let sortedOrder = watchList.sort((a, b) => a.vote_average - b.vote_average);
//     setWatchList([...sortedOrder]);
//   };

//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
//       <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
//         <thead>
//           <tr className="bg-gray-50">
//             <th className="px-6 py-4 font-medium text-gray-900">Name</th>
//             <th>
//               <div className="flex items-center">
//                 <i className='fa-solid fa-arrow-up cursor-pointer pr-1 ' onClick={(event) => { handleAscRatings(event); console.log('Asc clicked'); }}></i>
//                 <div>Ratings</div>
//                 <i className='fa-solid fa-arrow-down cursor-pointer pl-1' onClick={(event) => { console.log('Desc clicked'); handleDescRatings(event); }}></i>
//               </div>
//             </th>
//             <th>
//               <div className="flex items-center">
//                 <div>Popularity</div>
//               </div>
//             </th>
//             <th>
//               <div className="flex items-center">
//                 <div>Genre</div>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//           {watchList.map((movie) => (
//             <tr className="hover:bg-gray-50" key={movie.id}>
//               <td className="flex items-center px-6 py-4 font-normal text-gray-900">
//                 <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
//                 <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
//               </td>
//               <td className="pl-6 py-4">{movie.vote_average}</td>
//               <td className="pl-6 py-4">{movie.popularity}</td>
//               <td className="pl-2 py-4 flex">
//                 {movie.genre_ids.map((num) => (
//                   <p className='ml-1' key={num}>{getGenreName(num)}</p>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Watchlist;



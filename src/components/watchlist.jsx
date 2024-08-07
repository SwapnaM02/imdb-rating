 import React, { useState, useEffect } from 'react';
 import genreids from '../constants';

const getGenreName = genre_id => {
  console.log(genreids[genre_id] || 'NA');
  return genreids[genre_id] || 'NA';
};

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    let moviesFromLS = localStorage.getItem('movies');
    if (moviesFromLS) {
      setWatchList(JSON.parse(moviesFromLS));
    }
  }, []);

  const handleDescRatings = () => {
    console.log('Desc sort');
    let sortedOrder = watchList.sort((a, b) => b.vote_average - a.vote_average);
    setWatchList([...sortedOrder]);
  };

  const handleAscRatings = () => {
    console.log('Asc sort');
    let sortedOrder = watchList.sort((a, b) => a.vote_average - b.vote_average);
    setWatchList([...sortedOrder]);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <button onClick={handleAscRatings}><i className='fa-solid fa-arrow-up cursor-pointer pr-1 h-6 w-6' ></i></button>
                <div>Ratings</div>

                <button onClick={handleDescRatings}>
                  <i className='fa-solid fa-arrow-down cursor-pointer pl-1 h-6 w-6' ></i>
                                
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
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movie) => (
            <tr className="hover:bg-gray-50" key={movie.id}>
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4 flex">
                {movie.genre_ids.map((num) => (
                  <p className='ml-1' key={num}>{getGenreName(num)}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

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

export default Watchlist;



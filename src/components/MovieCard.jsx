import React from 'react'

const MovieCard = (props) => {
    console.log(props);
  return (
    <div className='text-2xl font-bold text-center m-4'>
      <h2 >Trending Movies</h2>
      <div className='flex justify-evenly flex-wrap gap-6' >
        
          
            <div 
            className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 key={props.index}' style={{backgroundImage:`url(${props.url})`}} >
              <div className='text-white w-full text-center pl-2 rounded-lg bg-gray-900/50'>{props.title}</div>

            </div>

          
        
      </div>
  </div>
  )
}

export default MovieCard

import React,{useState} from 'react'

function Banner(){
  return (
    <>
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end ' style={{backgroundImage:`url(data:image/jpeg;base64,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)`}}>
    <div className='text-white w-full text-center text-2xl'>Iron Man.</div>
      </div>
    </>
  )
}

function Movies() {
  const [movies, setMovies] = useState([
    { title: 'Movie1', url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', },
    { title: 'Movie2', url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', },
    { title: 'Movie3', url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', },
    { title: 'Movie4', url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', },
    { title: 'Movie5', url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', },
  ])

  return <>
  <div className='text-2xl font-bold text-center m-4'>
      <h2 >Trending Movies</h2>
      <div className='flex justify-evenly flex-wrap gap-6' >
        {movies.map( (movie,index) =>{
          return (
            <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 ' style={{backgroundImage:`url(${movie.url})`}} key={index}>
              <div className='text-white w-full text-center pl-2 rounded-lg bg-gray-900/50'>{movie.title}</div>

            </div>

          )
        })}
      </div>
  </div>
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

import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Banner = () => {
  const [bannerImg, setBannerImg] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Fetch the image from the provided URL
    const imageUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=71c51351382d7a83df322f402daafa69';
    axios
      .get(imageUrl)
      .then((response) => {
        console.log(response);
        console.log(response.data.results)
        console.log(response.data.results[0])
        const firstMovie = response.data.results[0];
        const firstMovietitle = firstMovie.title;
        const firstMovieImg = firstMovie.backdrop_path;

        setTitle(firstMovietitle);
        setBannerImg(`https://image.tmdb.org/t/p/original${firstMovieImg}`);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="text-white w-full text-center text-2xl">{title}</div>
    </div>
  );
}

export default Banner

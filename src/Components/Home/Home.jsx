import axios from 'axios';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  
const [trendingMovies, setTrendingMovies] = useState([]);


async function getTrending(){



 let {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6e142246c809346fca9416eb01cbeb39')
 setTrendingMovies(data.results)

 console.log(data.results)

}




useEffect(()=> {

  getTrending()

} , [])

return <>

<div className='row container m-auto py-5'>

  {trendingMovies.map((movie)=> <div key={movie.id} className='col-md-4 py-3'>
    <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="" />

<h2 className='h5 py-1'>{movie.title}</h2>

<button className='btn btn-info'>          <Link className="nav-link active" aria-current="page" to={`/details/${movie.id}`}>movie details</Link>
</button>

{/* <h6>{movie.overview}</h6> */}


  </div>)}

</div>

</>
  
}


// https://api.themoviedb.org/3/movie/popular?api_key=6e142246c809346fca9416eb01cbeb39